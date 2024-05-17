import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class EventService {
  constructor (private readonly database: DatabaseService) {};

  async findAll(param: number, sortBy?: {name: string, value: boolean}) {
    const ids = Array.from({ length: 10 }, (_, index) => +param * 10 + index + 1);

    const events = await this.database.events.findMany({
      where: {
        id: {
          in: ids
        }
      }
    })

    
    const length = await this.database.events.count()
    
    console.log(ids);
    

    if (Object.keys(sortBy).length === 2) {
      const sortedEvents = await this.database.events.findMany({
        orderBy: {
          [`${sortBy.name}`]: `${!!sortBy.value ? 'asc' : 'desc'}`,
        }
      });

      return {
        events: sortedEvents.filter((elem, index) => {
          if (index >= ids[0] && index <= ids.at(-1)) {
            return elem
          }
        }),
        length
      }
    }

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
