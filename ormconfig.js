module.exports = {
   "type": "mysql",
   "host": process.env.DB_HOST || "127.0.0.1",
   "port": 3306,
   "username": process.env.DB_USER || "martin",
   "password": process.env.DB_PASSWORD || "password",
   "database": "typeorm_test",
   "__synchronize__": true,
   "logging": false,
   "entities": [
      "build/entity/**/*.js"
   ],
   "migrations": [
      "build/migration/**/*.js"
   ],
   "migrationsTableName": "custom_migration_table",
   "subscribers": [
      "build/subscriber/**/*.js"
   ],
   "cli": {
      "entitiesDir": "build/entity",
      "migrationsDir": "build/migration",
      "subscribersDir": "build/subscriber"
   }
};
