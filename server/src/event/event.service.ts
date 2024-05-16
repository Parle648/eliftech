import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class EventService {
  constructor (private readonly database: DatabaseService) {};

  findAll(param: number) {
    const ids = Array.from({ length: 10 }, (_, index) => param * 10 + index + 1);

    const events = this.database.events.findMany({
      where: {
        id: {
          in: ids
        }
      }
    })

    return events
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
