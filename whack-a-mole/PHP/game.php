<?php
//Include the PHP functions to be used on the page 
include('common.php');

//Output header and navigation 
outputHeader("My Game Website - Game");
outputBannerNavigation("Game");
no_user();
?>

<!-- Contents of the page -->

<box id="game_canvas">

    <div class="score">Score:0</div>
    
<p id="game_over"> </p>

    <!-- Hole 1 -->
    <div class=" hole hole_1 ">
        <div class="mole"> </div>
    </div>

    <!-- Hole 2 -->
    <div class="hole hole_2">
        <div class="mole"> </div>
    </div>

    <!-- Hole 3 -->
    <div class="hole hole_3">
        <div class="mole"> </div>
    </div>

    <!-- Hole 4-->
    <div class="hole hole_4">
        <div class="mole"> </div>
    </div>

    <!-- Hole 5 -->
    <div class="hole hole_5">
        <div class="mole"> </div>
    </div>

    <!-- Hole 6 -->
    <div class="hole hole_6">
        <div class="mole"> </div>
    </div>

</box>
<!-- Start Button -->

        <div>
            <button class="game_button" onclick="start()"> Start </button>
        </div>

<!-- user table -->
<body onload= "users_table()">
<div class="user_score">


    <!--------------------------- Table starting ---------------------->
    <h1 id="session_user">'s Table </h3>

        <table>
            <thead>
                <tr>
                    <th>Attempt</th>
                    <th>Score</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td> 1st </td>
                    <td class="attempts" id= "attempt1"> </td>

                </tr>
                <tr>
                    <td> 2nd </td>
                    <td class="attempts" id= "attempt2"> </td>
                </tr>
                <tr>
                    <td> 3rd </td>
                    <td class="attempts" id= "attempt3"> </td>
                </tr>
                </tr>
                <tr>
                    <td> 4th </td>
                    <td class="attempts" id= "attempt4"> </td>
                </tr>
                <tr>
                    <td> 5th </td>
                    <td class="attempts" id= "attempt5"> </td>
                </tr>
                <tr>
                    <td> 6th </td>
                    <td class="attempts" id= "attempt6"> </td>
                </tr>
                <tr>
                    <td> 7th </td>
                    <td class="attempts" id= "attempt7"> </td>
                </tr>
                <tr>
                    <td> 8th </td>
                    <td class="attempts" id= "attempt8" > </td>
                </tr>
                <tr>
                    <td> 9th </td>
                    <td class="attempts" id= "attempt9"> </td>
                </tr>
                <tr>
                    <td> 10th </td>
                    <td class="attempts" id= "attempt10"> </td>
                </tr>
            </tbody>
        </table>
        <!--------------------------- Ending starting ---------------------->
</div>



<?php
//Output the footer
outputFooter();


script();


?>