function gradingStudents(grades) {
  const final_grades = []
  // Write your code here
  for (let grade of grades) {
      let final_grade;
      final_grade = ((grade >= 38) && ((grade % 5) >= 3))
    ? ((grade - (grade % 5)) + 5)
    : grade;
      final_grades.push(final_grade)
  }
  return final_grades
}


const res = gradingStudents([73, 67, 38, 33]);
console.log('res', res)