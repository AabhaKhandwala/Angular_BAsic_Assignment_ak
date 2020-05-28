import { Component, OnInit } from '@angular/core';
import { PersonService } from '../person.service';
import { Person } from '../Person';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  listOfPerson: string[];
  constructor(private personService: PersonService) {}

  ngOnInit(): void {
    this.personService.getPerson().subscribe((persons: any) => {
      this.listOfPerson = persons;
    });
  }

  get personList(): Person[] {
    return this.personService.getPersons();
  }
}
