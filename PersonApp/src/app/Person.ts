export class Person {
  firstName: string;
  lastName: string;
  age: number;

  constructor(firstName: string, lastName: string, age?: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  getfirstName(): string {
    return this.firstName;
  }

  setfirstName(firstName: string): void {
    this.firstName = firstName;
  }

  getlastName(): string {
    return this.lastName;
  }

  setlastName(lastName: string): void {
    this.lastName = lastName;
  }

  getAge(): number {
    return this.age;
  }

  setAge(age: number): void {
    this.age = age;
  }
}
