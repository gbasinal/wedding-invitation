(function(app) { 
	'use strict'; 
	
	var Animation = function() {};
  
	Animation.prototype.init = function() {
        Animation.prototype.inView();
	};

    Animation.prototype.inView = function() {
        $('.animated').one('inview', function(event, isInView) {
            var _this = $(this);
            var animatedChildren = _this.find('.animated-child');
            if(isInView){
                if(animatedChildren.length > 0) {
                    TweenMax.staggerTo(animatedChildren, 2, {  opacity: 1, delay: 0.5}, 2)
                }
            }
        });
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