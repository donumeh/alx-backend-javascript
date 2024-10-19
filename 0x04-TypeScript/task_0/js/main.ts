interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string
};

const student1: Student = {
    firstName: 'Adebayo',
    lastName: 'Segun',
    age: 13,
    location: 'Australia',
};

const student2: Student = {
    firstName: 'Wilson',
    lastName: 'Isaac',
    age: 12,
    location: 'United Kingdom',
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement('table') as HTMLTableElement;

const thead = document.createElement('thead')!;
const tbody = document.createElement('tbody')!;

const tr = document.createElement('tr')!;

for (const field of ['firstName', 'lastName', 'age', 'location']) {
    const th = document.createElement('th')!;
    th.textContent = field;

    tr.append(th);
}

thead.append(tr);
table.append(thead);

for (const student of studentsList) {
    const tr = document.createElement('tr')!;

    for (const value of Object.values(student)) {
        const td = document.createElement('td');
        td.textContent = value;
        tr.append(td);
    }
    tbody.append(tr);
}

table.append(tbody);

document.querySelector('body').append(table);
