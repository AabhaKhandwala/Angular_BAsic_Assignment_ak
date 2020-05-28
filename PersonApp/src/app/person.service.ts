import { Injectable } from '@angular/core';
import { Person } from './Person';
//import { PERSON } from './mock-Person';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  private PersonArr: Person[] = [
    new Person('Jammy', 'Thomas', 25),
    new Person('Susan', 'Kimberly', 55),
  ];

  constructor() {}
  getPersons(): Person[] {
    this.delay(4000);
    return this.PersonArr;
  }

  async delay(ms: number) {
    await new Promise((resolve) => setTimeout(() => resolve(), ms));
  }

  getPerson(): Observable<Person[]> {
    return of(PERSON);
  }
}
