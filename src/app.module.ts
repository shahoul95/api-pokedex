import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PokeDataModule } from './items/items.module';
import { PokedataService } from './pokedata/pokedata.service';

@Module({
  imports: [PokeDataModule],
  controllers: [AppController],
  providers: [AppService, PokedataService],
})
export class AppModule {}
