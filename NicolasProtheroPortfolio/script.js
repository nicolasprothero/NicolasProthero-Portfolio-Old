
let strImg = ".img_p";
let isDone = true;

$(document).ready(function(){
    isDone = false;
    $(strImg).fadeIn(2000, 'swing')
    setTimeout(function(){
        isDone = true;
    }, 1000);
        
    $(".link_p").on("mouseover", function(){
        if(isDone){
            isDone = false;
            $(strImg).hide(0,'swing');
            strImg = ".img_p" 
            $(strImg).show(0,'swing')}
            setTimeout(function(){
                isDone = true;
            }, 1000);

            }
        ),

    $(".link_UF").on("mouseover", function(){
        if(isDone){
            isDone = false;
            $(strImg).hide(0,'swing');
            strImg = ".img_UF" 
            $(strImg).show(0,'swing')}
            setTimeout(function(){
                isDone = true;
            }, 1000);

            }
        ),

    $(".link_travel").on("mouseover", function(){
        if(isDone){
            isDone = false;
            $(strImg).hide(0,'swing');
            strImg = ".img_travel" 
            $(strImg).show(0,'swing')}
            setTimeout(function(){
                isDone = true;
            }, 1000);

            }
        ),

    $(".link_art").on("mouseover", function(){
        if(isDone){
            isDone = false;
            $(strImg).hide(0,'swing');
            strImg = ".img_art" 
            $(strImg).show(0,'swing')}
            setTimeout(function(){
                isDone = true;
            }, 1000);

            }
        ),

    $(".link_plant").on("mouseover", function(){
        if(isDone){
            isDone = false;
            $(strImg).hide(0,'swing');
            strImg = ".img_plant" 
            $(strImg).show(0,'swing')}
            setTimeout(function(){
                isDone = true;
            }, 1000);

            }
        );

    })