interface IPersonOptions {
  firstName: string;
  lastName: string;
  age?: number;
  phoneNumber?: number;
  state?: string;
  zipCode?: number;
  occupation?: string;
  hourlyWage?: number;
  certifications?: string[];
}

class Person implements IPersonOptions {
  firstName: string;
  lastName: string;
  age: number;
  phoneNumber: number;
  state: string;
  zipCode: number;
  occupation: string;
  workingHour: number;
  hourlyWage: number;
  certification: string[] = [];

  constructor(
    firstName: string,
    lastName: string,
    age?: number,
    phoneNumber?: number,
    state?: string,
    zipCode?: number,
    occupation?: string,
    //workingHour: number,
    hourlyWage?: number
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.phoneNumber = phoneNumber;
    this.state = state;
    this.zipCode = zipCode;
    this.occupation = occupation;
    // this.workingHour = workingHour;
    this.hourlyWage = hourlyWage;
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
  getPhoneNumber(): number {
    return this.phoneNumber;
  }

  setPhoneNumber(phoneNumber: number): void {
    this.phoneNumber = phoneNumber;
  }

  getState(): string {
    return this.state;
  }

  setState(state: string): void {
    this.state = state;
  }

  getZipCode(): number {
    return this.zipCode;
  }

  setZipCode(zipCode: number): void {
    this.zipCode = zipCode;
  }

  getOccupation(): string {
    return this.occupation;
  }

  setOccupation(occupation: string): void {
    this.occupation = occupation;
  }

  getworkingHour(): number {
    return this.workingHour;
  }

  setworkingHour(workingHour: number): void {
    this.workingHour = workingHour;
  }

  getHourlyWage(): number {
    return this.hourlyWage;
  }

  setHourlywage(hourlyWage: number): void {
    this.hourlyWage = hourlyWage;
  }

  printFullName(): string {
    return "FullName: " + this.firstName + " " + this.lastName;
  }

  printDetails(): string {
    return (
      "Details are: " +
      ("Name: " +
        this.getfirstName() +
        " " +
        "lastName: " +
        this.getlastName() +
        "\nAge: " +
        this.getAge() +
        "\nphoneNumber: " +
        this.getPhoneNumber() +
        "\nLocation: " +
        this.getState() +
        " , " +
        this.getZipCode() +
        "\nOccupation: " +
        this.getOccupation() +
        "\nWages: " +
        this.getWages())
    );
  }

  getWages(): string {
    if (this.workingHour != null) {
      return "total wage: " + this.workingHour * this.getHourlyWage();
    } else {
      return "total wage: " + this.getHourlyWage() * 40;
    }
  }
  addCerts(...argum: string[]): string {
    return (
      "Certification: " +
      (this.certification = this.certification.concat(argum))
    );
  }

  //  createPerson(option:IPersonOptions): { firstName: string; lastName: string } {
  //   let newPerson = { firstName: "John", lastName: "Martin" };
  //   if (option.firstName) {
  //     newPerson.firstName = option.firstName;
  //   }
  //   if (option.lastName) {
  //     newPerson.lastName = option.lastName;
  //   }
  //   return newPerson;
  // }

  static addEmployee(Options: IPersonOptions): Person {
    return new Person(Options.firstName, Options.lastName);
  }
}

let p1 = new Person(
  "Kate",
  "Short",
  35,
  3021457896,
  "NorthCarolina",
  28201,
  "Doctor",
  100
);
let p2 = new Person(
  "James",
  "Steve",
  28,
  7041258669,
  "SouthCarolina",
  69655,
  "Fashion Designer",
  50
);

document.getElementById("fname").innerHTML = p1.printFullName();
document.getElementById("details").innerHTML = p1.printDetails();
document.getElementById("wage").innerHTML = p1.getWages();
document.getElementById("fname").innerHTML = p2.printFullName();
document.getElementById("details").innerHTML = p2.printDetails();
document.getElementById("cert").innerHTML = p2.addCerts("CPA", "MBA");
document.getElementById("inf").innerHTML =
  "Displaying Interface:" +
  Person.addEmployee({
    firstName: "John",
    lastName: "Martin",
  }).printFullName();
