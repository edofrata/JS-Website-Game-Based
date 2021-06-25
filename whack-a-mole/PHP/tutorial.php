<?php
//Include the PHP functions to be used on the page 
include('common.php');

//Output header and navigation 
outputHeader("My Game Website - Tutorial");
outputBannerNavigation("Tutorial");
no_user();
?>

<!-- Contents of the page -->
<div class="Tutorial_box">
    <!-- Game explanation -->
    <h1> Game Tutorial </h1>

            <p> One game will last fifteen seconds,
                there will be moles popping up at random from their own holes.
                The mouse, or trackpad it is used as a virtual mallet for hitting the moles back to their holes.
            </p>
            <p>
                If the mallet hits the mole <mark>the score will increase</mark> and so the <mark>mole speed will</mark>, during the whole game.
                At the end of each game there will be a total score which will come at use for the ranking table so you can compare your game with other players.
                The difficulty in this game is that every moles hit the speed of randomness moles popping up will increase so they do not keep the same frequency each time.
            </p>


</div>

<?php
//Output the footer
outputFooter();
script();

?>
