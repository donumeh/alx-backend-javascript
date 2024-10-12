export default function getStudentIdsSum(getListStudents) {
  if (!Array.isArray(getListStudents)) {
    return [];
  }

  return getListStudents.reduce((accumulator, element) => accumulator + element.id, 0);
}
