/*Ramains issues to solve:
*/

/*Implementations already done:

    -simulating private variable to store the password;
    -simulating private variable to store the balance;
    -simulating private bolean variable inside the balance closure, to check if the
    user is logged or not;

    -withdraw method;
    -deposit method;
    -login method;
    -check balance method;
    -more realistic context to the challenge including dataBase interpretation;
    -private variables, making the code easier to read;
    -password cheching to every method but logout;
    -change name method;
*/

class BankAccount{

    #_login = false;
    #_balance = 0;
    #_password = "";
    #_name = "";
    #_id = "";

    constructor(_name, _password){
        
        this.#_name = _name;
        this.#_password = _password;
        //function to create a new entry on database and bring the new _id.
    }

    account_login(_name, _password){

        /**
         * imagine here another contition to cheack if we have both _name and _password
         * with the same _id on dataBase.
         */
        if(this.#_name === _name && this.#_password === _password){
            document.write(`<br>Hi ${this.#_name}!`)
        }
        else{
            document.write(`<br>Sry... wrong password.`)
        }
    }
    account_logout(){

        document.write(`<br>Good bye ${this.#_name}!`)
        //function to update dataBase with the new information.
    }
    account_withdraw(_value, _password){

        if(this.#_password === _password){

            if(_value > this.#_balance){
                document.write(`<br>Sorry ${this.#_name}, you don't that much :(`)
            }
            else{
                this.#_balance = this.#_balance - _value;
                document.write(`<br>You receive ${_value}, now your accounts balance is ${this.#_balance}`);
            }

        }else{
            document.write(`<br>Sry... wrong password.`)
        }
    }
    account_deposit(_value, _password){

        if(this.#_password === _password){
            if(_value < 0){
                document.write(`<br>Sorry ${this.#_name}, you can't deposit negative values :(`)
            }
            else{
                this.#_balance = this.#_balance + _value;
                document.write(`<br>You deposit ${_value}, now your accounts balance is ${this.#_balance}`);
            }
        }else{
            document.write(`<br>Sry... wrong password.`)
        }
    }
    account_check_balance(_password){

        if(this.#_password === _password){
            document.write(`<br>Your balance is ${this.#_balance}`);
        }else{
            document.write(`<br>Sry... wrong password.`)
        }
    }
    account_change_name(_new_name, _password){
        if(this.#_password === _password){
            this.#_name = _new_name;
        }else{
            document.write(`<br>Sry... wrong password.`)
        }
    }
}

let user = new BankAccount("Mike", "123456");





/*DEBUG CODE------------------------------------------------------------------------*/

user.account_login("Mike", "123456");
user.account_withdraw(1000, "123456");
user.account_deposit(2500, "123456");
user.account_check_balance("123456");
user.account_logout();