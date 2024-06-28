import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { ThrottlerModule } from "@nestjs/throttler";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UserEntity } from "./user/entities/user.entity";
import { UsersModule } from "./user/users.module";
import { UserBankDetailsModule } from "./userBankDetails/user-bank-details.module";
import { ExpensesModule } from './expenses/expenses.module';
import { ExpenseEntity } from "./expenses/entities/expense.entity";

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: "postgres",
            url: process.env.DB_URL || "",
            // host: process.env.DB_HOST || "",
            port: 3001,
            // username: process.env.DB_USER || "",
            // password: process.env.DB_PASSWORD || "",
            // database: process.env.DB_DBNAME || "",
            autoLoadEntities: true,
            synchronize: true,
            entities : [
                UserEntity,
                ExpenseEntity
            ]
        }),

        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: ".env",
        }),

        ThrottlerModule.forRoot([
            {
                ttl: 60000,
                limit: 10,
            },
        ]),
        UsersModule,
        UserBankDetailsModule,
        ExpensesModule
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
