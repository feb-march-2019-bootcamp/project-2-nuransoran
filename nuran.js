class School{
constructor(){

this.teachers=[];
this.students=[];
}
addteacher(teach){
   
    this.teachers.push(teach);
}
fireteacher(index){
this.teachers.splice(index,1);
}
addstudent(student){
    this.students.push(student);
}
firestudent(index){
this.students.splice(index,1)
}
}
class Teacher{
 constructor(id,teachername,department){
this.id=id;
this.teachername=teachername;
this.department=department;
 }
}
class Student{
    constructor(studentname,department){
this.studentname=studentname;
this.department=department;

    }
}
const a=new School();
a.addteacher(new Teacher( 1, 'gulnar','eng-software')
    
);
a.addstudent(new Student(
'nuran','eng-software'
));
a.addstudent(new Student(
    'bahra','eng-software'
    ));
a.firestudent(new Student(1));
console.log(a);
