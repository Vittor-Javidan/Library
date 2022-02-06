
class User {

    /**
     * Example of constructor using directly setters instead of the parameters itself
     * @description
     * @param {string} first_name @param {string} last_name
     */
    constructor(first_name, last_name){
        this.set_First_Name = first_name;
        this.set_Last_Name = last_name;
    }


    /**
     * The main function of setters is to format the input when you want to modify a class property, 
     * by using any block of code that you need. IMPORTANT!: Be carefull to not choose the property direcly
     * insted the setter, because on javaScript we don't have a way to define then private to be used
     * just by setters and getters.
     * @description
     * @param {string} first_name_to_set
     */
    set set_First_Name(first_name_to_set){
        this.first_Name = first_name_to_set.toUpperCase();
    }

    /**
     * The main function of setters is to format the input when you want to modify a class property, 
     * by using any block of code that you need. IMPORTANT!: Be carefull to not choose the property direcly
     * insted the setter, because on javaScript we don't have a way to define then private to be used
     * just by setters and getters.
     * @param {string} last_Name_to_set
     */
    set set_Last_Name(last_Name_to_set){
        this.last_Name = last_Name_to_set.toUpperCase();
    }
    
    /**
     * The main function of getters is to format way you want to show your class property, by using any
     * block of code that you need.  IMPORTANT!: Be carefull to not choose the property direcly
     * insted the getter, because on javaScript we don't have a way to define then private to be used
     * just by setters and getters.
     * @description
     */
    get get_full_Name(){
        return this.first_Name + " " + this.last_Name;
    }
}

let user_1 = new User("Spongebob", "Squarepants");
let user_2 = new User("Patrick", "Star");





/*--------------------------------------------------------------------------------------------------------*/
console.log(user_1.get_full_Name);
console.log(user_2.get_full_Name);