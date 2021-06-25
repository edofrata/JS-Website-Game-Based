/* This game has been developed with CSS and JavaScript as it was the best way of doing it.
While with the HTML Canvas, thi sgame wouldn't have been 
as good as it is right now, therefore I prefered to give privilege to quality rather than complexity. 
I took notes here and there from examples, to help me and develop the idea that I had on my mind, with js documentation as well, which has been very helpfu. */

// Declaring the constants for the game
const holes = document.querySelectorAll('.hole');

// the score user 
const score_user = document.querySelector('.score');

// declaring where to get the moles from 
const moles = document.querySelectorAll('.mole');

// declaring the score
let score = 0;

// declaring the same ole in case of popping up from the same hole consecutevely
let same_hole;

// declarin the time
let time = false;

// declaring the start count, keeping count of the games
let start_count = 0;

// Array of attempts
var score_array = [];

// condition if the user is not in logged in
if ("user_logged" in sessionStorage) {

  score_array = JSON.parse(sessionStorage.user_logged).attempts;

}

// storing the score of the user logged in session storage in JSON format 
var store_score = {};

// giving the array of class name to user_row
var user_row = document.getElementsByClassName("username");

// givig the array of class points to user_points
var user_points = document.getElementsByClassName("points");

// deciding the speed of the mole that pop up
var interval = 900;

// Popping up moles from the holes randomly function
function random_hole(holes) {

  // random holes
  const holes_index = Math.floor(Math.random() * holes.length);
  const hole = holes[holes_index];

  // assuming the mole pops out the same time
  if (hole === same_hole) {

    return random_hole(holes);

  }

  same_hole = hole;
  return hole;
}


// function that will start the game
function start() {
  // storing the attempts in sessionStorage
  var store_score_user = {};

  score_user.textContent = "Score:" + 0;

  document.getElementById("game_over").innerHTML = "";

  score = 0;

  interval = 900;

  time_up = false;
  moles_up();

  // you can click the button only once   
  setTimeout(() => {
    document.getElementsByClassName("game_button")[0].disabled = true;
  }, 100);

  setTimeout(() => {
    document.getElementsByClassName("game_button")[0].disabled = false;
  }, 21000);

  // finishing up the game
  setTimeout(() => time = true, 20000);

  // setting the time for the text game over 
  setTimeout(() => game_over(), 21000);

  // setting a timer for pushing the final score inside the array
  setTimeout(() => score_array.push(score), 21000);

  // setting timeout for the score
  setTimeout(() => score, 21000);


  // storing the attempts in sessionStorage
  store_score_user.user_name = "user_logged";
  store_score_user.attempts = score_array;
  setTimeout(() => sessionStorage[store_score_user.user_name] = JSON.stringify(store_score_user), 21000);

  // counting the start button
  start_count++;
  console.log("I incremented start");

}



// function that will take the mole popping up and down
function moles_up() {

  const hole = random_hole(holes);

  //  making the mole popping up by triggering the css file "up"
  hole.classList.add('up');

  // setting time for making the mole going down and disappearing
  setTimeout(() => {
    hole.classList.remove('up');
    // until the variable "time_UP" is false  it will carry on
    if (!time_up) {

      moles_up();
    }

  }, interval);

  // update the user table timeout
  setTimeout(() => users_table(), 20500);

  // update the user score and saving it into the session store
  setTimeout(() => update_user_score(), 21000);
}


function click_on_mole() {

  // increasing the score on the board 
  score++;

  // incrementing the interval
  interval = interval - 20;

  // this removes the mole from up
  this.classList.remove('up');

  // display the score inside the game box
  score_user.textContent = "Score:" + score;


}



// function for the game over, ending the game
function game_over() {

  document.getElementById("game_over").innerHTML = "Game Over";

  time_up = true;

}


function users_table() {

  let name = sessionStorage.logged_in_user;

  // user table table
  store_score.name = name;
  setTimeout(() => store_score.score = score, 21000);
  setTimeout(() => sessionStorage[store_score.name] = JSON.stringify(store_score), 21000);

  //get the username and insert the score in the table
  document.getElementById("session_user").innerHTML = sessionStorage.logged_in_user + "'s Table";

  // writing the points for the attempt in the user table
  for (i = 0; i < document.getElementsByClassName("attempts").length; i++) {

    if ("user_logged" in sessionStorage) {
      document.getElementsByClassName("attempts")[i].innerHTML = JSON.parse(sessionStorage.user_logged).attempts[i];

      if (JSON.parse(sessionStorage.user_logged).attempts[i] == undefined) {

        document.getElementsByClassName("attempts")[i].innerHTML = "";
      }

      if (score_array.length >= 10) {
        score_array.length = "";
      }

    }
  }

}


// function that udate the score in LocalStorage for the ranking table
function update_user_score() {
  if ("user_logged" in sessionStorage) {

    // take the value of score in local
    var score_user_local = JSON.parse(localStorage[sessionStorage.logged_in_user]).score;

    // compares the score and the score il local store of the user logged in
    if (score > score_user_local) {

      // retriving the data from the logged in user
      let data = JSON.parse(localStorage[sessionStorage.logged_in_user]);
      // setting the data.score inside the logged in user 
      data.score = score;

      // adding the whole score to the user in local storage who is logged in
      localStorage.setItem(sessionStorage.logged_in_user, JSON.stringify(data))
    }
  }
}


function ranking_table() {


  // starting the for loop that goes until the local storage does not finish
  for (var i = 0; i < localStorage.length; i++) {

    user_row[i].innerHTML = localStorage.key(i);

    user_points[i].innerHTML = JSON.parse(localStorage.getItem(localStorage.key(i))).score;

    //  Writing in the points row to the user that did not play yet, setting the storage to 0
    if (JSON.parse(localStorage.getItem(localStorage.key(i))).score === undefined) {

      let data = JSON.parse(localStorage.getItem(localStorage.key(i)));
      data.score = 0;
      user_points[i].innerHTML = data.score;
      localStorage.setItem(localStorage.key(i), JSON.stringify(data));
    }


    order_table();

    // If the length achieved the length of the table, it will stop
    if (i == user_row.length && user_points.length) {

      break;
    }
  }

  for (y = 0; y < localStorage.length; y++) {

    order_table();

  }
}



//------- function for ordering the raking table-------
function order_table() {
// temporary holder 1
  let temp = "";
// temporary holder 2
  let temp2 = "";

  for (j = 0; j < localStorage.length; j++) {

 // if the inner text is null then there is no need to order the table as there might be zero or just one user
    if (user_points[j].innerText != "" && user_points[j + 1].innerText != "") {

      // sorting in bubble way
      if (JSON.parse(user_points[j].innerHTML) < JSON.parse(user_points[j + 1].innerHTML)) {


        temp = user_row[j].innerHTML
        temp2 = user_points[j].innerHTML

        user_row[j].innerHTML = user_row[j + 1].innerHTML;
        user_points[j].innerHTML = user_points[j + 1].innerHTML;

        user_row[j + 1].innerHTML = temp;
        user_points[j + 1].innerHTML = temp2;

      }
    }
  }
}



moles.forEach(mole => mole.addEventListener('click', click_on_mole));