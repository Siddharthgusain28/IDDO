"use strict";
$(function(){
    $("#Portfolio .btn").click(function(){
        $(".btn").removeClass("active")
        $(this).toggleClass("active")

        if($(this).text()=="All"){
            $(".all").fadeIn(1000)
        }
        else if($(this).text()=="Website"){
            $(".all").fadeOut(0)
            $(".website").fadeIn(1000)
        }
        else{
            $(".all").fadeOut(0)
            $(".brand").fadeIn(1000)
        }

    })
    $("#Portfolio .Plus").click(function(){

        $(this).children().toggleClass("fa-minus-circle");
        $(".all:nth-last-child(7),.all:nth-last-child(8),.all:nth-last-child(9)").slideToggle()
    })
    $("#About .Plus").click(function(){
        $(this).children().toggleClass("fa-minus-circle");
        $(".teamcol:nth-last-child(4),.teamcol:nth-last-child(5),.teamcol:nth-last-child(6)").slideToggle()
    })
    
    $(".accordion a").click(function(e){
        e.preventDefault();
        $(".accordion a").removeClass("active")
        $(this).addClass("active")
        $(".accordion p").slideUp()
        $(this).next("p").slideDown()
    });
    
    $(".top").click(function(){
        $("html,body").animate({scrollTop:0},1000)
    });
    
    $(".menu").click(function(){
        $(this).toggleClass("active")
        $(".colapse").slideToggle(1000)
    })
    
    if(screen.width<768){
        $("nav a").click(function(){
            $(".colapse").slideUp()
            $(".menu").removeClass("active")
        })
    }
    
    $(".Signup").click(function(e){
        e.preventDefault()
        $("body").append(`<div class="overlay"></div>`)
        $("body").append(`<div class="popup"></div>`)
        $(".popup").append($(".form").html())
        $("body").css({"overflow-y":"hidden"})
    
    
        $(".close").click(function(){
            $(".overlay,.popup").remove()
            $("body").css({"overflow":"auto"})
        })
    
        $(window).keydown(function(e){
            if(e.which==27){
                $(".overlay,.popup").remove()
            }
            $("body").css({"overflow":"auto"})
        })
    });
    
    $(".banner button").click(function(e){
        e.preventDefault();
        $("body").append(`<div class="overlay"></div>`)
        $("body").append(`<div class="popup"></div>`)
        $(".popup").append(`<button class="close fa fa-times"></button><iframe width="560" height="315" src="https://www.youtube.com/embed/g1j9rR-H1lk?si=TZglu-cPr_yEnnHm" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`)
        $("body").css({"overflow-y":"hidden"})
    
    
        $(".close").click(function(){
            $(".overlay,.popup").remove()
            $("body").css({"overflow":"auto"})
        })
    
        $(window).keydown(function(e){
            if(e.which==27){
                $(".overlay,.popup").remove()
            }
            $("body").css({"overflow":"auto"})
        })
    
    })
    $(".rating").bxSlider({
        controls:false,
        auto:true,
        pause:2000,
        autoHover:true
    })
})
