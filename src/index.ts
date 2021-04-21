import "reflect-metadata";
import {createConnection} from "typeorm";
import {User} from "./entity/User";

// Setup:
// mysql> CREATE USER 'martin'@'%' IDENTIFIED WITH mysql_native_password BY 'password';
// mysql> GRANT all privileges on *.* to 'martin'@'%';

async function sleep(msec) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, msec)
    });
}

async function connectRetry() {
    for (let i = 0; ; i++) {
        try {
            return await createConnection();
        }
        catch (e) {
            if (i < 4) {
                console.error(e.message);
                console.error("Retrying...");
                await sleep((i+1) * 1000);
            } else {
                throw e;
            }
        }
    }
}

connectRetry().then(async connection => {
    let userRepository = connection.getRepository(User);

    console.log("Inserting a new user into the database...");
    const user = new User();
    user.firstName = "Timber";
    user.lastName = "Saw";
    user.age = 25;
    //await connection.manager.save(user);
    await userRepository.save(user);
    console.log("Saved a new user with id: " + user.id);

    console.log("Loading users from the database...");
    //const users = await connection.manager.find(User);
    const users = await userRepository.find();
    console.log("Loaded users: ", users);

    console.log("Here you can setup and run express/koa/any other framework.");

}).catch(error => {
    console.log(error);
    process.exit(1);
});
