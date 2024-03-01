import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root',
})

//HeroService class is going to provide an injectable service,
//and it can also have its own injected dependencies.
export class HeroService {
  constructor() {
    
  }
  getHeroes(): Hero[] {
    return HEROES;
  }
}
