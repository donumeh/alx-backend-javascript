export interface EmployeeInterface {
    workFromHome(): string,
    getCoffeeBreak(): string,
}

export interface DirectorInterface extends EmployeeInterface {
    workDirectorTasks(): string,
}

export interface TeacherInterface extends EmployeeInterface {
    workTeacherTasks(): string,
}

export class Director implements DirectorInterface {
    constructor() {

    }

    workFromHome(): string {
        return 'Working from home';
    }

    getCoffeeBreak(): string {
        return 'Getting a coffee break';
    }

    workDirectorTasks(): string {
        return 'Getting to director tasks';
    }
}

export class Teacher implements TeacherInterface  {
    constructor() {}

    workFromHome(): string {
        return 'Cannot work from home'
    }

    getCoffeeBreak(): string {
        return 'Cannot have a break'
    }

    workTeacherTasks(): string {
        return 'Getting to work'
    }
}

export function createEmployee(salary: number | string): Director | Teacher {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher()
    } else {
        return new Director()
    }
}

function isDirector(employee: Director | Teacher): employee is Director {
    return employee instanceof Director
}

function executeWork(employee: Director | Teacher): string {
    if (isDirector(employee)) {
        employee.workDirectorTasks();
    } else {
        return employee.workTeacherTasks()
    }
}

type Subjects =  "Math" | "History";

function teachClass(todayClass: Subjects): "Teaching Math" | "Teaching History" {
    if (todayClass === "Math") {
        return "Teaching Math";
    } else {
        return "Teaching History"
    }
}

