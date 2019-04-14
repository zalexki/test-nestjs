import { TypeOrmModule } from '@nestjs/typeorm';

export const databaseConnections = [
    TypeOrmModule.forRoot({
        type: 'mysql',
        host: 'db',
        port: 3306,
        username: 'dev',
        password: 'dev',
        database: 'dev',
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true,

        // type: 'Postgres',
        // host: Config.get.databases.main.host,
        // port: Config.get.databases.main.port,
        // username: Config.get.databases.main.username,
        // password: Config.get.databases.main.password,
        // database: Config.get.databases.main.database,
        // name: Config.get.databases.main.name,
        // entities: [
        //     // Add the paths to modules that use the main database here
        //     `${path.join(appRootPath.path, 'src', 'modules', 'shared')}/**/*.entity{.ts,.js}`
        // ],
        // synchronize: true
    })
];