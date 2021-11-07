(function(app) { 
	'use strict'; 
	
    var Menu = function() {};
    
	Menu.prototype.init = function() {
        particlesJS.load('particles-js', 'assets/js/particles.json', function() {
            console.log('callback - particles.js config loaded');
          });
	};

    app.Menu = Menu;

    app.ready(function () {
        Menu.prototype.init()
    })

})(window.app);