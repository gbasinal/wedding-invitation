(function(app) { 
	'use strict'; 
	
	var Animation = function() {};
  
	Animation.prototype.init = function() {
        Animation.prototype.inView();
        Animation.prototype.nextButtonAnimation();
        Animation.prototype.openRSVPModal();
        Animation.prototype.addNewField();
        Animation.prototype.playAudio();
	};

    Animation.prototype.inView = function() {
        $('.animated').one('inview', function(event, isInView) {
            var _this = $(this);
            var animatedChildren = _this.find('.animated-child');
            if(isInView){
                if(animatedChildren.length > 0) {
                    TweenMax.staggerTo(animatedChildren, 1, {  opacity: 1, delay: 0.3},.5)
                }
            }
        });
    }


    Animation.prototype.nextButtonAnimation = function(){
        $(".btn-next").click(function(){

            if($("#first").hasClass("hidden") === false){
                TweenMax.to('#first', 1, {  opacity: 0, onComplete: function(){
                    $("#first").addClass("hidden");
                    $('#second').removeAttr('style');
                    $("#second").removeClass("hidden");
                    $("#second").addClass("animated");
                    Animation.prototype.inView();
                }})
            }
            if($("#second").hasClass("hidden") === false){
                TweenMax.to('#second', 1, {  opacity: 0, onComplete: function(){
                    $("#second").addClass("hidden");
                    $('#third').removeAttr('style');
                    $("#third").removeClass("hidden");
                    $("#third").addClass("animated");
                    Animation.prototype.inView();
                }})
            }   

            if($("#third").hasClass("hidden") === false){
                TweenMax.to('#third', 1, {  opacity: 0, onComplete: function(){
                    $("#third").addClass("hidden");
                    $('#fourth').removeAttr('style');
                    $("#fourth").removeClass("hidden");
                    $("#fourth").addClass("animated");
                    Animation.prototype.inView();
                }})
            }     

            if($("#fourth").hasClass("hidden") === false){
                TweenMax.to('#fourth', 1, {  opacity: 0, onComplete: function(){
                    $("#fourth").addClass("hidden");
                    $('#fifth').removeAttr('style');
                    $("#fifth").removeClass("hidden");
                    $("#fifth").addClass("animated");
                    Animation.prototype.inView();
                }})
            }                              

        })
        $(".btn-previous").click(function(){


            if($("#second").hasClass("hidden") === false){
                TweenMax.to('#second', 1, {  opacity: 0, onComplete: function(){
                    $("#second").addClass("hidden");
                    $("#first").removeAttr('style');
                    $("#first").removeClass("hidden");
                    $("#first").addClass("animated");
                    Animation.prototype.inView();
                }})
            } 
            
            if($("#third").hasClass("hidden") === false){
                TweenMax.to('#third', 1, {  opacity: 0, onComplete: function(){
                    $("#third").addClass("hidden");
                    $('#second').removeAttr('style');
                    $("#second").removeClass("hidden");
                    $("#second").addClass("animated");
                   
                    Animation.prototype.inView();
                }})
            }  
            
            if($("#fourth").hasClass("hidden") === false){
                TweenMax.to('#fourth', 1, {  opacity: 0, onComplete: function(){
                    $("#fourth").addClass("hidden");
                    $('#third').removeAttr('style');
                    $("#third").removeClass("hidden");
                    $("#third").addClass("animated");
                   
                    Animation.prototype.inView();
                }})
            }     
            
            
            if($("#fifth").hasClass("hidden") === false){
                TweenMax.to('#fifth', 1, {  opacity: 0, onComplete: function(){
                    $("#fifth").addClass("hidden");
                    $('#fourth').removeAttr('style');
                    $("#fourth").removeClass("hidden");
                    $("#fourth").addClass("animated");
                   
                    Animation.prototype.inView();
                }})
            }             

        })        
    }

    Animation.prototype.openRSVPModal = function(){
        $(".btn-yes").on("click",function(){
          $(".modal").show();  
        })

        $(".btn-agree").on("click", function(){
            $(".ty-container").hide();
            $(".form-container").removeClass("hidden");
            $(".form-container").addClass("d-flex");
            $(".form-container").addClass("animated");
            Animation.prototype.inView();

        })

        $(".btn-close").on("click", function(){
            $(".modal").hide(); 
        })
    }

    Animation.prototype.addNewField = function(){
        let ctx; 
        $('input:radio[name="count"]').on("change", function(){
            ctx = $(this).val();
            console.log(ctx)
            if(ctx > 0){
                $(".number-of-guest-container").removeClass("hidden")
            }else {
                $(".number-of-guest-container").addClass("hidden")
            }
        })
    }


    Animation.prototype.playAudio = function(){
        var audio = new Audio("assets/music/bgmusic.mp3");
        audio.play();
        $('#play-pause-button').on("click",function(){
        if($(this).hasClass('fa-play'))
        {
            $(this).removeClass('fa-play');
            $(this).addClass('fa-pause');
            audio.play();
        }
        else
        {
            $(this).removeClass('fa-pause');
            $(this).addClass('fa-play');
            audio.pause();
        }
        });

        audio.onended = function() {
            $("#play-pause-button").removeClass('fa-pause');
            $("#play-pause-button").addClass('fa-play');
        };
    }


    app.Animation = Animation;

    app.ready(function () {
        console.log('Animation Ready');
        Animation.prototype.init()
    })

    app.onLoad(function(){
        console.log('Animation Load');
        
    })


})(window.app);