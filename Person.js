var Person = /** @class */ (function () {
    function Person(firstName, lastName, age, phoneNumber, state, zipCode, occupation, 
    //workingHour: number,
    hourlyWage) {
        this.certification = [];
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
    Person.prototype.getfirstName = function () {
        return this.firstName;
    };
    Person.prototype.setfirstName = function (firstName) {
        this.firstName = firstName;
    };
    Person.prototype.getlastName = function () {
        return this.lastName;
    };
    Person.prototype.setlastName = function (lastName) {
        this.lastName = lastName;
    };
    Person.prototype.getAge = function () {
        return this.age;
    };
    Person.prototype.setAge = function (age) {
        this.age = age;
    };
    Person.prototype.getPhoneNumber = function () {
        return this.phoneNumber;
    };
    Person.prototype.setPhoneNumber = function (phoneNumber) {
        this.phoneNumber = phoneNumber;
    };
    Person.prototype.getState = function () {
        return this.state;
    };
    Person.prototype.setState = function (state) {
        this.state = state;
    };
    Person.prototype.getZipCode = function () {
        return this.zipCode;
    };
    Person.prototype.setZipCode = function (zipCode) {
        this.zipCode = zipCode;
    };
    Person.prototype.getOccupation = function () {
        return this.occupation;
    };
    Person.prototype.setOccupation = function (occupation) {
        this.occupation = occupation;
    };
    Person.prototype.getworkingHour = function () {
        return this.workingHour;
    };
    Person.prototype.setworkingHour = function (workingHour) {
        this.workingHour = workingHour;
    };
    Person.prototype.getHourlyWage = function () {
        return this.hourlyWage;
    };
    Person.prototype.setHourlywage = function (hourlyWage) {
        this.hourlyWage = hourlyWage;
    };
    Person.prototype.printFullName = function () {
        return "FullName: " + this.firstName + " " + this.lastName;
    };
    Person.prototype.printDetails = function () {
        return ("Details are: " +
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
                this.getWages()));
    };
    Person.prototype.getWages = function () {
        if (this.workingHour != null) {
            return "total wage: " + this.workingHour * this.getHourlyWage();
        }
        else {
            return "total wage: " + this.getHourlyWage() * 40;
        }
    };
    Person.prototype.addCerts = function () {
        var argum = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            argum[_i] = arguments[_i];
        }
        return ("Certification: " +
            (this.certification = this.certification.concat(argum)));
    };
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
    Person.addEmployee = function (Options) {
        return new Person(Options.firstName, Options.lastName);
    };
    return Person;
}());
var p1 = new Person("Kate", "Short", 35, 3021457896, "NorthCarolina", 28201, "Doctor", 100);
var p2 = new Person("James", "Steve", 28, 7041258669, "SouthCarolina", 69655, "Fashion Designer", 50);
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
            lastName: "Martin"
        }).printFullName();
