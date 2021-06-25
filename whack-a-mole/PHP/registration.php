<?php
//Include the PHP functions to be used on the page 
include('common.php');

//Output header and navigation 
outputHeader("My Game Website - Game");
// Function that outputs the logo and the background 
LoginandRegister();
?>

<box class="register_box">
<!-- -------------Reguster Text -------------------->
    <h2> Register </h2>
  
  <!-- This form will be used for sending data -->
  <!-- <form> -->
    <div class="register_text">

<!-- Beginning of the Registration page Text inside the box -->
        <label for="name"><b>Name</b></label>
        <input id="name_input" type="text" placeholder="Name" name="Full name" onkeyup="check_name(this)" id="name"  required>

        <label for="name"><b>Surname</b></label>
        <input id="surname_input" type="text" placeholder="Surname" name="Full name" onkeyup="check_name(this)" id="name"  required>

    <!-- Email section -->
        <label for="email"><b>Email</b></label>
        <input id="email_input" type="text" placeholder="Enter Email" name="email"  onkeyup="check_email(this)" required>
    
         <!-- Date of Birth Section -->
        <label for="birth"><b>Date of Birth</b></label>
        <input id="birth_input" type="date" placeholder="dd/mm/yyyy" name="username" required>

         <!-- Phone Number Section -->
        <label for="number"><b>Phone Number</b></label>
        <input id="ph_number_input" type="text" placeholder="078512345884" onkeyup="check_phone(this)" name="username" required>

         <!-- Address Section -->
         <label for="address"><b>City</b></label>
        <input id="address_input" type="text" placeholder="London" onkeyup="check_address(this)" name="username"  required>

         <!-- Postcode Section -->
         <label for="postcode"><b>Postcode</b></label>
        <input id="postcode_input" type="text" placeholder="W2 2SZ"   onkeyup="check_postcode(this)" name="username"  required>

        <!-- Username -->
        <label for="username"><b>Username</b></label>
        <input id="username_input" type="text" placeholder="Enter Username" onkeyup="check_username(this)" name="username"  required>

        <!-- Password-->
        <label for="psw"><b>Password</b></label>
        <input id="password_input" type="password" placeholder="Enter Password" name="psw"  required>

        <!-- Repeat Password-->
        <label for="psw_repeat"><b>Repeat Password</b></label>
        <input id="password_repeat_input" type="password" placeholder="Repeat Password" name="psw-repeat"  required>

<!----------------------------Button for the register page------------------------>
       
        <div class="registration_button_size">   

            <p>

                <button class="register_button" onclick="store_user()">Register</button>

            </p>
        <!-- After registration pop up message -->

        <p>Already a User?<a href="index.php">Click here</a></p>
        </div>

        <!-- END OF THE BUTTON SECTION -->
    </div>
<!-- </form> -->
</box>

</body>

<?php

script();

?>
