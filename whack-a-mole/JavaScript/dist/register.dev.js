"use strict";

// checking email path
var email_path = /\S+@\S+\.\S+/; // creating a storage to store the users

var users_storage = {};

function store_user() {
  // Storing the actual value in the storage
  users_storage.name = document.getElementById("name_input").value;
  users_storage.surname = document.getElementById("surname_input").value;
  users_storage.email = document.getElementById("email_input").value;
  users_storage.birth = document.getElementById("birth_input").value;
  users_storage.number = document.getElementById("ph_number_input").value;
  users_storage.address = document.getElementById("address_input").value;
  users_storage.postcode = document.getElementById("postcode_input").value;
  users_storage.username = document.getElementById("username_input").value;
  users_storage.password = document.getElementById("password_input").value;
  users_storage.psw_repeat = document.getElementById("password_repeat_input").value; // setting colour to all the fields;

  document.getElementById("name_input").style.backgroundColor = "#FFFFFF";
  document.getElementById("surname_input").style.backgroundColor = "#FFFFFF";
  document.getElementById("email_input").style.backgroundColor = "#FFFFFF";
  document.getElementById("birth_input").style.backgroundColor = "#FFFFFF";
  document.getElementById("ph_number_input").style.backgroundColor = "#FFFFFF";
  document.getElementById("address_input").style.backgroundColor = "#FFFFFF";
  document.getElementById("postcode_input").style.backgroundColor = "#FFFFFF";
  document.getElementById("username_input").style.backgroundColor = "#FFFFFF";
  document.getElementById("password_input").style.backgroundColor = "#FFFFFF";
  document.getElementById("password_repeat_input").style.backgroundColor = "#FFFFFF"; // Checking for any empty field

  if (users_storage.name == "") {
    document.getElementById("name_input").style.backgroundColor = "#ff6e6c";
    alert("Need to insert your Name");
  } else if (users_storage.surname == "") {
    document.getElementById("surname_input").style.backgroundColor = "#ff6e6c";
    alert("Need to insert you Surname");
  } else if (users_storage.email == "" || !users_storage.email.match(email_path)) {
    document.getElementById("email_input").style.backgroundColor = "#ff6e6c";
    alert("Need to insert the Email or check if it is valid");
  } else if (users_storage.birth == "") {
    document.getElementById("birth_input").style.backgroundColor = "#ff6e6c";
    alert("Need to insert Your Date of Birth OR check the format: dd-mm-yyyy");
  } else if (users_storage.number == "" || users_storage.number.length > 11) {
    document.getElementById("ph_number_input").style.backgroundColor = "#ff6e6c";
    alert("Need to insert the Phone Number or it may be not valid");
  } else if (users_storage.address == "" || users_storage.address.length >= 10) {
    document.getElementById("address_input").style.backgroundColor = "#ff6e6c";
    alert("Need to insert the Address");
  } else if (users_storage.postcode == "" || users_storage.postcode.length >= 8) {
    document.getElementById("postcode_input").style.backgroundColor = "#ff6e6c";
    alert("Need to insert the Postcode");
  } else if (users_storage.username == "") {
    document.getElementById("username_input").style.backgroundColor = "#ff6e6c";
    alert("Need to insert the Username");
  } else if (users_storage.username in localStorage) {
    document.getElementById("username_input").style.backgroundColor = "#ff6e6c";
    alert("The username is already taken");
  } else if (users_storage.password == "") {
    document.getElementById("password_input").style.backgroundColor = "#ff6e6c";
    alert("Need to insert the Password");
  } else if (users_storage.password.length <= 6) {
    document.getElementById("password_input").style.backgroundColor = "#ff6e6c";
    alert("The password must be longer than 6 characters");
  } else if (users_storage.psw_repeat == "") {
    document.getElementById("password_repeat_input").style.backgroundColor = "#ff6e6c";
    alert("Need to Repeat your password");
  } else if (users_storage.password !== users_storage.psw_repeat) {
    document.getElementById("password_input").style.backgroundColor = "#ff6e6c";
    document.getElementById("password_repeat_input").style.backgroundColor = "#ff6e6c";
    alert("The passwords do not match");
  } else {
    // here if everything went through will direct you to the page og login
    console.log(users_storage); //testing if it actually prints out and stores the parameters

    location.replace("index.php"); //relocating to the login page

    localStorage[users_storage.username] = JSON.stringify(users_storage); //STores the details in the licalstorage
  }
} // this function checks the name validation


function check_name(name) {
  var letters = /[^a-z\\" "]/gi;
  name.value = name.value.replace(letters, "");
} // this function check the phone number validation


function check_phone(phone) {
  var digits = /[^0-9]/gi;
  phone.value = phone.value.replace(digits, "");
} // check that the postcode does not have special characters


function check_postcode(postcode) {
  var check = /[^0-9\\a-z\\" "]/gi;
  postcode.value = postcode.value.replace(check, "");
  var upper_case = document.getElementById("postcode_input"); // transforms the letters in uppercase

  upper_case.value = upper_case.value.toUpperCase();
}

function check_email(email) {
  var check = /[^0-9\\a-z\\.\\_\\-\\@]/gi;
  email.value = email.value.replace(check, "");
} // check that the address does not have special characters


function check_address(address) {
  var check = /[^0-9\\a-z\\" "]/gi;
  address.value = address.value.replace(check, "");
} // gives validation to the username with only certain characters


function check_username(username) {
  var check = /[^0-9\\a-z\\-\\.\\_]/gi;
  username.value = username.value.replace(check, "");
}