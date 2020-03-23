import { LetterService } from './letter.service';
import { Module, HttpModule } from '@nestjs/common';
import { LetterController } from './letter.controller';

@Module({
  imports: [HttpModule],
  controllers: [LetterController],
  providers: [LetterService],
})
export class LetterModule {}
