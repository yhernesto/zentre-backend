import { Module } from '@nestjs/common'
import { ScreenService } from './screen.service'
import { ScreenController } from './screen.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Screen } from './database/screen.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Screen])],
  providers: [ScreenService],
  controllers: [ScreenController],
  exports: [TypeOrmModule, ScreenService],
})
export class ScreenModule {}
