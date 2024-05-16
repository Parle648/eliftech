import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseService } from './database/database.service';
import { EventModule } from './event/event.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [EventModule, UserModule],
  controllers: [AppController],
  providers: [AppService, DatabaseService],
})
export class AppModule {}
