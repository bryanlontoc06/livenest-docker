import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    UsersModule,
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.MONGO_ATLAS_USER}:${process.env.MONGO_ATLAS_PASSWORD}@cluster0.taodhds.mongodb.net/${process.env.MONGO_ATLAS_DB}?retryWrites=true&w=majority&appName=Cluster0`,
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
