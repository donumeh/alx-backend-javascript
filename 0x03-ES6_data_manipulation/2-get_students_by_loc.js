export default function getStudentsByLocation(getListStudents, city) {
  // if (!Array.isArray(getListStudents)) {
  //   return [];
  // }
  // if (!city) {
  //   return getListStudents;
  // }

  return getListStudents.filter((obj) => obj.location === city);
}
