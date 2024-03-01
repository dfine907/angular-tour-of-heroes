import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

//HeroService class is going to provide an injectable service,
//and it can also have its own injected dependencies.
export class HeroService {
  constructor(private messageService: MessageService) {}

  // getHeroes(): Observable<Hero[]> {
  //   const heroes = of(HEROES);
  //   return heroes;
  // }
    //below is editted to include messageService
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
}
