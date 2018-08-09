var playing=false;
var score;
var lifeRemain;
var step;
var action;
var fruits=['fried-eggs','fruit-salad','icecream','pancakes','pizza','popcorn'];
$(function(){
$('#startreset').click(function(){
if(playing==true){      // if we are playing reload the page
    location.reload();
}
else{
    playing=true;
    score=0;
$('#scorevalue').html(score); // display the score
$('#lifeRemain').show();  // show the life Reamin box
lifeRemain=3;
addLife();

$('#gameover').hide();
$('#startreset').html('Reset Game');
startFruits();
}

});

$('#fruit1').mouseover(function(){
   score++;
   $('#scorevalue').html(score);
$('#sound')[0].play();  // sound id will return an array so we will select the first audio
clearInterval(action); // stop the fruit from falling once we mouseover

    // hide the fruit using explode animation lasting for 500ms
    $('#fruit1').hide('explode',400);

   setTimeout( startFruits,500); // generate the new fruit only after the previous animation has stopped i.e 500ms
});
function addLife(){
    $('#lifeRemain').empty();
    for(i=1;i<=lifeRemain;i++){
        $('#lifeRemain').append('<img src="images/star.png" class="life">');   // append lifes

    }
}
function startFruits(){
    //console.log("hi,Your fruit fn is working");
   $('#fruit1').show();
chooseFruit();// select a random fruit
$('#fruit1').css({'top':-50,'left':Math.round(550*Math.random())});  // setting a random horizontal position
    // 650px was the height of contaainer and 100 px was the size of each image
    // so we  have multiplied by 550(650-100) so our image does not go out of container

step=1+Math.round(5*Math.random());  // create a random step for fruit to fall

    action=setInterval(function(){  // add the random step we have generated to top position after every 10ms resulting in fruits to fall down
        $('#fruit1').css('top',
            $('#fruit1').position().top+step);

// check whether has fruit has reached the end of container

        if($('#fruit1').position().top>$('#fruitContainer').height()) {

            if (lifeRemain > 1) {
                $('#fruit1').show();
                chooseFruit();// select a random fruit
                $('#fruit1').css({'top': -50, 'left': Math.round(550 * Math.random())});  // setting a random horizontal position
                // 650px was the height of contaainer and 100 px was the size of each image
                // so we  have multiplied by 550(650-100) so our image does not go out of container

                step = 1 + Math.round(5 * Math.random());  // create a random step for fruit to fall
                lifeRemain--;
                addLife();
            }
            else {
                playing = false;
                $('#startreset').html("Start Game");
                $('#gameover').show();
                $('#gameover').html('<p>GAME OVER Your Score is ' + score + '</p>');
                $('#lifeRemain').hide();
                stopAction(); // stop the fruits from falling down
            }

            }

    },10);




}

function stopAction(){
    clearInterval(action);
$('#fruit1').hide();
}

function chooseFruit(){ // generating random fruits
$('#fruit1').attr('src','images/'+fruits[Math.round(5*Math.random())]+'.png');  // pick a random name from fruits array and append the picked
    //name to the images src to display that particular image on screen
}
});