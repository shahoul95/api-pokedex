import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PokedataModule } from './pokedata/pokedata.module';

@Module({
  imports: [PokedataModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
