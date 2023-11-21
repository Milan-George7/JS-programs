// to print student details using oops

class Student{
    // method
    constructor(name,id,mark,grade){
        this.stuName = name
        this.stuId = id
        this.stuMark = mark
        this.stuGrade = grade
    }
    printDetails(){
        console.log("---------student details---------");
        console.log(`
        Student Name: ${this.stuName}
        Student Id: ${this.stuId}
        Student Mark: ${this.stuMark}
        Student Grade: ${this.stuGrade}`);
    }
}

// object creation
const student1 = new Student("milan",100,"A+","XII")
student1.printDetails()