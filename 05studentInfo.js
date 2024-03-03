const student = {
  name: "Alice",
  age: 22,
  major: "Computer Science",
  GPA: 3.8,
  isEnrolled: true
};

function displayStudentInfo(studentObj) {
  for (const property in studentObj) {
    console.log(`Property: ${property}, Value: ${studentObj[property]}`);
  }
}

displayStudentInfo(student);
