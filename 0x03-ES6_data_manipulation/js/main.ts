interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "student1",
    lastName: "student1LastName",
    age: 12,
    location: "Brazil",
};

const student2: Student = {
    firstName: "student2",
    lastName: "student2LastName",
    age: 13,
    location: "Senegal",
};

const studentsList: Student[] = [student1, student2];

const div = document.getElementById('table_rows');

studentsList.forEach((student: Student) => {
    const tr = document.createElement('tr');

    for (let i of Object.values(student)) {
        const td = document.createElement('td');

        td.textContent = `${i}`;
        tr.appendChild(td);
    }

    div.appendChild(tr);
});




