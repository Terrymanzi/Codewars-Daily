function mostMoney(students) {
  // your code here
  console.log(students);
  let newStudentData = [];

  //finding total of each student
  for (let student of students) {
    let totalAmount = 0;
    let list = {};
    totalAmount +=
      student.fives * 5 + student.tens * 10 + student.twenties * 20;
    list.name = student.name;
    list.total = totalAmount;
    newStudentData.push(list);
    console.log(`${student.name} ${totalAmount}`);
  }

  console.log(newStudentData);

  //finding the max total of all students
  let max = newStudentData.reduce((prev, current) => {
    if (current.total > prev.total) {
      return current;
    } else {
      return prev;
    }
  });
  console.log(max.name);
  //   return max.name
}
