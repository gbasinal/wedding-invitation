(function(app) { 
	'use strict'; 
	
	var Animation = function() {};
  
	Animation.prototype.init = function() {
        Animation.prototype.inView();
        Animation.prototype.nextButtonAnimation();
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

        })
        $(".btn-previous").click(function(){

            if($("#third").hasClass("hidden") === false){
                TweenMax.to('#third', 1, {  opacity: 0, onComplete: function(){
                    $("#third").addClass("hidden");
                    $('#second').removeAttr('style');
                    $("#second").removeClass("hidden");
                    $("#second").addClass("animated");
                   
                    Animation.prototype.inView();
                }})
            }
            if($("#second").hasClass("hidden") === false){
                TweenMax.to('#second', 1, {  opacity: 0, onComplete: function(){
                    $("#second").addClass("hidden");
                    $("#first").removeAttr('style');
                    $("#first").removeClass("hidden");
                    $("#first").addClass("animated");
                    Animation.prototype.inView();
                }})
            }            

        })        
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