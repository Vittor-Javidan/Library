function login(){

    let userName = "Vittor";
    let userInbox = 0;
    
    function displayUserName(){
        console.log(`Hello ${userName}`);
        document.write(`<br>Hello ${userName}`);
    }

    function displayUserInbox(){
        console.log(`You have ${userInbox} new messages`)
        document.write(`<br>You have ${userInbox} new messages`)
    }

    displayUserName();
    displayUserInbox();
}

login();