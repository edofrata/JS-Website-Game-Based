
//Check to see if user is logged in already

function checkLogin(){
    if(sessionStorage.logged_in_user !== undefined){
        //Extract details of logged in user
        let user = JSON.parse(localStorage[sessionStorage.logged_in_user]);
        
        //Say hello to logged in user
        document.getElementById("logged_check").innerHTML = user_login.email + " logged in.";
    }
}

// Tracking the user
let cookies = document.cookie;


function login_real(){

    document.getElementById("login_password").style.backgroundColor = "#FFFFFF";
    document.getElementById("login_username").style.backgroundColor = "#FFFFFF";
    // retriving the usernzmd inserted 
    let username = document.getElementById("login_username").value;

    if(localStorage[username] === undefined){

        // meaning that the user does not have an account
        document.getElementById("login_failure").innerHTML = "Are you sure that you have an account?";

        document.getElementById("login_username").style.backgroundColor = "#ff6e6c";
        return;
        
     } else{
        //  The user has an account
        let user_login = JSON.parse(localStorage[username]); //COnvert to JS

        // retriving password
        let password = document.getElementById("login_password").value;

        // checking ig the password is in the system

        if(password === user_login.password){

            
            // clears any failures
            document.getElementById("login_failure").innerHTML = "";
            // we save the session in loggedInUser
            sessionStorage.logged_in_user = user_login.username;

        
        
            // Relocates the page if everything went through
            location.replace("game.php");
        }
        else{

            // password has not been found

            document.getElementById("login_password").style.backgroundColor = "#ff6e6c";
            document.getElementById("login_failure").innerHTML = "Password Not Recognized. Please try again.";

        }

        }

}


function sign_out(){

    sessionStorage.clear();
    location.replace("index.php");
}
