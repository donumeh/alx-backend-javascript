export default function updateStudentGradeByCity(getListStudents, city, newGrades) {
  if (!Array.isArray(getListStudents)) {
    return [];
  }

  const students = getListStudents.filter((student) => student.location === city);
  return students.map((student) => {
    const findStudentGrade = newGrades.find((stGrade) => stGrade.studentId === student.id);

    if (findStudentGrade) {
      return { ...student, grade: findStudentGrade.grade };
    }
    return { ...student, grade: 'N/A' };
  });
}
