/**
 * @description You have two way to make variable private. One is through classes, using
 * the symbol "#" in the baginning of any variable identifier. And the second way is
 * through closures.
 */
class Anything{

    #_private_variable = "any value type [string, number, boolean ...]";

    constructor(_value){
        this.#_private_variable = _value;
    }

    /**
     * @description You can use "get" and "set" tags if you want, but in that case you 
     * don't need it. The diference is: 
     * Instead set the private variable as
     *              _anything._set_private_variable = "value"      //using "set" keyword
     * 
     * you gonna set it as a method if you don't use the keywords.
     *              _anything._set_private_variable("value")       //just writting a method
     * 
     * this aplied to getters as well
     *              _anything._get_private_variable         //using "get" keyword
     *              _anything._get_private_variable()       //just writting a method
     * 
     */
    _get_private_variable(){
        return this.#_private_variable;
    }
    /**
     * @param {string} _new_value
     */
    _set_private_variable(_new_value){
        this.#_private_variable = _new_value;
    }
}

/**
 * @description This is the second way, using closures. Inside closures, you have to use
 * "set" and "get" keywords to create setters and getters.
 */
let _closure_name = (function(){

    /*This is the private area*/

    let _private_variable = "My precious 35 bitcoins";

    return{

        /*This is the public area*/

        _public_variable: "1981 dogecoin",
        
        get get_private_variable(){
            return _private_variable;
        },
        
        /**
         * @param {string} value - String
         */
        set set_private_variable(value){
            _private_variable = value;
        }
    }
})();





/*-------------------------------------------------------------------------------------------------------*/
let _anything = new Anything("my value");

//set and get using methods
_anything._set_private_variable("class new value");
document.write(`<br> ${_anything._get_private_variable()}`);

//set and get using the keywords
_closure_name.set_private_variable = "closure new value";
document.write(`<br> ${_closure_name.get_private_variable}`);