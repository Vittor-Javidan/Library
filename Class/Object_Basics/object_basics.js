/**
 * @description In javaScript you can create objects without the need to create a class first.
 */
let human = {

    /*
        attributes notations changes a little. Instead using "attribute = value;", you need to use
        "attribute: value".

        An additional detail to pay attention, is: Everything finish with a " , " instead " ; ".
    */


    name: "Rick",
    age: 65,

    eat: function(){
        console.log("Rick is eating")
    },

    drink: function(){
        console.log("Rick is drinking alcohool")
    }
};





/*-------------------------------------------------------------------------------------------*/
human.eat(); //dot notation
human['eat'](); //bracket notation

human.drink();
human['drink']();