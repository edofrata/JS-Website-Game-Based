<?php
//Include the PHP functions to be used on the page 
include('common.php');

//Output header and navigation 
outputHeader("My Game Website - Login");
LoginandRegister();
?>

<!-- Contents of the page -->
<box class="login_box">
    <!-- H2 log in page -->
    <h2> Log-in </h2>


    <div class="login_text">
        <!-------- Here are the input texts inside the box ------------->

        <label for="username"><b>Username</b></label>
        <input id="login_username" type="text" placeholder="Enter Username" onkeyup="check_username(this)" name="email" id="email" required>

        <label for="psw"><b>Password</b></label>
        <input id="login_password" type="password" placeholder="Enter Password" name="psw" id="psw" required>
        <div id="loggedlo_check"></div>



        <p id="login_failure"> </p>
        <!-- Section for the Log in button -->
        <div class="user_registration">

            <button class="login_button" onclick="login_real()"> Sign-in </button>

            <p> Not a user?<a href="registration.php">Click here</a></p>

            <div>

                <!-- Text highlighted for the "not user? CLick here" section------------>

            </div>
</box>
<!-------------END of the Box----------------->

</body>

<?php

script();

?>