var playing=false;
var score;
var lifeRemain;
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
$('#startreset').html('Reset Game');
startFruits();
}

});
function addLife(){
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
}

function chooseFruit(){ // generating random fruits
$('#fruit1').attr('src','images/'+fruits[Math.round(5*Math.random())]+'.png');  // pick a random name from fruits array and append the picked
    //name to the images src to display that particular image on screen
}
});