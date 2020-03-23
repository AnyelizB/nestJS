import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LetterModule } from './Letter/letter.module';

@Module({
  imports: [LetterModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
