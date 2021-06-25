<?php

//Ouputs the header for the page and opening body tag
function outputHeader($title)
{
    echo '<!DOCTYPE html>';
    echo '<html>';
    echo '<head>';
    echo '<title>' . $title . '</title>';
    echo '<!-- Link to external style sheet -->';
    echo '<link rel="icon" href="../images/moles.png/logo.png" type="image" sizes="16x16">';
    echo '<link rel="stylesheet" type="text/css" href="../CSS/styles.css">';
    echo '<link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">'; 
    echo '</head>';
    echo '<body>';
    echo '<body class= "login_gif">';
}

/* Ouputs the banner and the navigation bar
    The selected class is applied to the page that matches the page name variable */
function outputBannerNavigation($pageName)
{
    //Output banner and first part of navigation
    echo '<div class="text_background"><a href="game.php"> <img class="logo_style" src="../Images/moles.png" alt="Mole image"></a><a class="text">Whack-A-Mole</a></div>';

    echo '<div class="navigation">';


    echo '<button class="sign_out" onclick="sign_out()"> Sign out </button>';
    //Array of pages to link to
    $linkNames = array("Game", "Ranking Table", "Tutorial");
    $linkAddresses = array("game.php", "rank_table.php", "tutorial.php");

    //Output navigation
    for ($x = 0; $x < count($linkNames); $x++) {
        echo '<a ';

        if ($linkNames[$x] == $pageName) {
            echo 'class="selected" ';
        }
        echo 'href="' . $linkAddresses[$x] . '">' . $linkNames[$x] . '</a>';
    }

    echo '</div>';

}

// Function for log in and register page which outputs the same background, logo and text
function LoginandRegister()
{

    echo '<body class= "login_gif"> 
       <div>

            <img class="logo_login" src="../Images/moles.png" href="game.php" alt="Mole image">

                <p class="text_logopage">Whack-A-Mole</p>

        </div>';
}

//Outputs closing body tag and closing HTML tag
function outputFooter()
{
    echo '<footer class="footer"> 
            
                 <div class="footer_author">
                    <p> Author: Edoardo Fratantonio<br>
                    <a href="mailto:ef364@live.mdx.ac.uk"> ef364@live.mdx.ac.uk</a></p>
                </div>

                <div class="footer_coursework">
                    <p> Coursework: Object-Oriented Assessment 1<br>
                        University: Middlesex University</p>
                </div>

                <div class= "footer_location">
                     <p> Location:<a href= "https://www.google.com/maps/place/Regent+St,+London/@51.5131276,-0.1427796,17z/">Regent St, London</a> <br>
                                                                     
                     </p>
                </div>

        </footer>';
    
   
}

function script(){

    echo ' 
    <script src="../JavaScript/whack_a_mole.js"></script>
    <script src="../JavaScript/login_recognition.js"></script>
    <script src="../JavaScript/register.js"></script>';



 echo '</body>';
    echo '</html>';
}

function no_user(){

echo '<script> 

let name = localStorage.getItem(sessionStorage.logged_in_user);
  if(name === null){

    location.replace("index.php");
  }
  
</script> ';
}