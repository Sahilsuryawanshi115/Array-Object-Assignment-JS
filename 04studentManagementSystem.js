// Initial array of students
const students = [
  { id: 1, firstName: "John", lastName: "Doe", age: 20, grade: "A" },
  { id: 2, firstName: "Jane", lastName: "Smith", age: 22, grade: "B" },
  { id: 3, firstName: "Bob", lastName: "Johnson", age: 19, grade: "A" },
];

// a. Add a Student: Create a function to add a new student to the array.
function addStudent(newStudent) {
  students.push(newStudent);
}

// b. Update Student Information: Create a function to update a student's information based on their id.
function updateStudent(id, updatedInfo) {
  const studentToUpdate = students.find(student => student.id === id);
  if (studentToUpdate) {
    Object.assign(studentToUpdate, updatedInfo);
  }
}

// c. Delete a Student: Create a function to delete a student based on their id.
function deleteStudent(id) {
  const indexToDelete = students.findIndex(student => student.id === id);
  if (indexToDelete !== -1) {
    students.splice(indexToDelete, 1);
  }
}

// d. List All Students: Create a function to display a list of all students.
function listAllStudents() {
  console.log("List of Students:");
  students.forEach(student => {
    console.log(`${student.id}. ${student.firstName} ${student.lastName}, Age: ${student.age}, Grade: ${student.grade}`);
  });
}

// e. Find Students by Grade: Create a function to find all students who have a specific grade.
function findStudentsByGrade(targetGrade) {
  return students.filter(student => student.grade === targetGrade);
}

// f. Calculate Average Age: Create a function to calculate the average age of all students using array method.
function calculateAverageAge() {
  const totalAge = students.reduce((sum, student) => sum + student.age, 0);
  return totalAge / students.length;
}

// Example usage:

// a. Add a Student
const newStudent = { id: 4, firstName: "Nick", lastName: "Jain", age: 20, grade: "B" };
addStudent(newStudent);

// b. Update Student Information
updateStudent(2, { age: 23 });

// c. Delete a Student
deleteStudent(3);

// d. List All Students
listAllStudents();

// e. Find Students by Grade
const gradeBStudents = findStudentsByGrade("B");
console.log("Students with Grade B:", gradeBStudents);

// f. Calculate Average Age
const averageAge = calculateAverageAge();
console.log("Average Age of Students:", averageAge);
