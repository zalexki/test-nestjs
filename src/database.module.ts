import { TypeOrmModule } from '@nestjs/typeorm';
import { Module, DynamicModule } from '@nestjs/common';
import { ConfigService } from './config.service';

function DatabaseOrmModule (): DynamicModule {
    const config = new ConfigService(__dirname+'/../.env');
    return TypeOrmModule.forRoot({
        type: 'mysql',
        host: config.get('DB_HOST').toString(),
        port: parseInt(config.get('DB_PORT')),
        username: config.get('DB_USERNAME').toString(),
        password: config.get('DB_PASSWORD').toString(),
        database: config.get('DB_DATABASENAME').toString(),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true,
    })
  }

@Module({
    imports: [DatabaseOrmModule()],
    exports: [TypeOrmModule],
})
export class DatabaseModule {}