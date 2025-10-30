import { Module } from '@nestjs/common';
import { EditalService } from './edital.service';
import { EditalController } from './edital.controller';

@Module({
    controllers: [EditalController],
    providers: [EditalService],
})
export class EditalModule { }