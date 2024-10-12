export default function getStudentsByLocation(getListStudents, city) {
  // if (!Array.isArray(getListStudents)) {
  //   return [];
  // }

  return getListStudents.filter((obj) => obj.location === city);
}
