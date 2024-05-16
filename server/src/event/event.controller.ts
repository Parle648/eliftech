import { Controller, Get, Param } from '@nestjs/common';
import { EventService } from './event.service';

@Controller('/event')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Get('/pages/:number')
  findAll(@Param('number') param: string) {
    return this.eventService.findAll(+param);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventService.findOne(+id);
  }
}
