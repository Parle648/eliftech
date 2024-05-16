import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class EventService {
  constructor (private readonly database: DatabaseService) {};

  async findAll(param: number) {
    const ids = Array.from({ length: 10 }, (_, index) => +param * 10 + index + 1);

    const events = await this.database.events.findMany({
      where: {
        id: {
          in: ids
        }
      }
    })

    const length = await this.database.events.count()

    return {
      events,
      length
    }
  }

  findOne(id: number) {
    const event = this.database.events.findMany({
      where: {
        id
      }
    })

    return event
  }

}
