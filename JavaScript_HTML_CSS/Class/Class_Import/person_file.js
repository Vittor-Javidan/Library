export default class Person{
    
    /**
     * @param {string} name - @param {number} age 
     */
    constructor(person_name, person_age){
        this.name = person_name;
        this.age = person_age;
    }

    eat(){
        console.log(`${this.name} is eating`)
    }

    how_old(){
        console.log(`${this.name} is ${this.age} years old`)
    }


}

export class Student extends Person{
    
    /**
     * @param {string} student_name - @param {number} student_age - @param {string} course
     */
    constructor(student_name, student_age, course){
        super(student_name, student_age);
        this.course = course
    }

    wich_course(){
        console.log(`This student belongs to ${this.course}`);
    }
}
