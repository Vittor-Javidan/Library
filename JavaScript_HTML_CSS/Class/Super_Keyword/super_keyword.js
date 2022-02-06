class Person{
    
    /**
     * @description Super keyword is a way to bring the constructor from parent class inside a
     * child class. You don't need to repeat propertys inside the child class since the parent 
     * aready have then.
     * @param {string} name @param {number} age 
     */
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

class Student extends Person{

    /**
     * @param {string} name @param {number} age @param {number} gpa 
     */
    constructor(name, age, gpa){

        super(name, age);
        this.gpa = gpa;
    }
}

class Teacher extends Person{
    
    /**
     * @param {string} name @param {number} age @param {number} class_Size 
     */
    constructor(name, age, class_Size){
        super(name, age);
        this.classSize = class_Size;
    }
}

let student_object = new Student("Steve", 21, 2.0);
let teacher_object = new Teacher("Bob", 45, 30);





/*---------------------------------------------------*/
console.log(`Student name: ${student_object.name}`);
console.log(`Student age: ${student_object.age}`);
console.log(`Student gpa: ${student_object.gpa}`);

console.log(`Teacher name: ${teacher_object.name}`);
console.log(`Teacher age: ${teacher_object.age}`);
console.log(`Teacher class size: ${teacher_object.classSize}`);