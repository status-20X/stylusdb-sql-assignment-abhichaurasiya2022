const readCSV = require('./index');
const innerJoinQuery = "SELECT student.name, student.age, enrollment.course FROM student INNER JOIN enrollment ON student.id = enrollment.student_id";
const leftJoinQuery = "SELECT student.name, student.age, enrollment.course FROM student LEFT JOIN enrollment ON student.id = enrollment.student_id";
const rightJoinQuery = "SELECT student.name, student.age, enrollment.course FROM enrollment RIGHT JOIN student ON enrollment.student_id = student.id";
let test = "SELECT student.name, enrollment.course FROM student RIGHT JOIN enrollment ON student.id=enrollment.student_id WHERE enrollment.course = 'Chemistry'"
readCSV(test).then((val)=>{
    console.log(val);
}).catch((err)=>{
    console.error(err.message);
})