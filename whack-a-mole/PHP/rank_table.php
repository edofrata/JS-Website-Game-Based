<?php
//Include the PHP functions to be used on the page 
include('common.php');

//Output header and navigation 
outputHeader("My Game Website - Rank Table");
outputBannerNavigation("Ranking Table");
no_user();
?>

<!-- Contents of the page -->
<body onload="ranking_table()">
<!-- Starting Ranking Table -->
<div class="ranking_table">

    <table>
        <!-- Heads of Raniing table -->
        <thead>            
            <tr>
                <th> Place </th>
                <th> Username </th>
                <th> Points </th>
                <th> Time </th>
            </tr>
        </thead>
        <tbody>
            <tr>
<!-- Setting every rows with the parameters -->
            <tr>
                <td  class="rank">1</td>
                <td class="username"> </td>
                <td class="points"> </td>
                <td class="Time">20s</td>
            </tr>
            <tr>
                <td class="rank">2</td>
                <td class="username"> </td>
                <td class="points"> </td>
                <td class="Time">20s</td>
            </tr>
            <tr>
                <td class="rank">3</td>
                <td class="username"> </td>
                <td class="points"> </td>
                <td class="Time">20s</td>
            </tr>
            <tr>
                <td class="rank">4</td>
                <td class="username "> </td>
                <td class="points"> </td>
                <td class="Time">20s</td>
            </tr>
            <tr>
                <td class="rank">5</td>
                <td class="username"> </td>
                <td class="points"> </td>
                <td class="Time">20s</td>
            </tr>
            <tr>
                <td class="rank">6</td>
                <td class="username"> </td>
                <td class="points"> </td>
                <td class="Time">20s</td>
            </tr>
            <tr>
                <td class="rank">7</td>
                <td class="username"> </td>
                <td class="points"> </td>
                <td class="Time">20s</td>
            </tr>
            <tr>
                <td class="rank">8</td>
                <td class="username"> </td>
                <td class="points"> </td>
                <td class="Time">20s</td>
            </tr>
            <td class="rank">9</td>
            <td class="username"> </td>
            <td class="points"> </td>
            <td class="Time">20s</td>
            </tr>
            <tr>
                <td class="rank">10</td>
                <td class="username"> </td>
                <td class="points"> </td>
                <td class="Time">20s</td>
            </tr>


<!-- Ending of Ranking table -->
</div>
       




<?php
//Output the footer
outputFooter();
script();

?>