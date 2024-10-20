import { Teacher, Directors, printTeacher, newStudent } from "./main";

const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
}


console.log(teacher3);

const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17
}

console.log(director1);
console.log(printTeacher('John', 'Doe'));
console.log(newStudent.displayName());
console.log(newStudent.workOnHomework());
