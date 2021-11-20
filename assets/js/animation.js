(function(app) { 
	'use strict'; 
	
	var Animation = function() {};
  
	Animation.prototype.init = function() {

        Animation.prototype.nextButtonAnimation();
        Animation.prototype.openRSVPModal();
        Animation.prototype.addNewField();
        Animation.prototype.sendDataToApi();
        
        // setTimeout(()=>{
        //     Animation.prototype.playAudio();
        // },500)
        
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
            if($("#fifth").hasClass("hidden") === false){
                TweenMax.to('#fifth', 1, {  opacity: 0, onComplete: function(){
                    $("#fifth").addClass("hidden");
                    $('#sixth').removeAttr('style');
                    $("#sixth").removeClass("hidden");
                    $("#sixth").addClass("animated");
                    Animation.prototype.inView();
                }})
            }                                       
            if($("#sixth").hasClass("hidden") === false){
                TweenMax.to('#sixth', 1, {  opacity: 0, onComplete: function(){
                    $("#sixth").addClass("hidden");
                    $('#seventh').removeAttr('style');
                    $("#seventh").removeClass("hidden");
                    $("#seventh").addClass("animated");
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
            if($("#sixth").hasClass("hidden") === false){
                TweenMax.to('#sixth', 1, {  opacity: 0, onComplete: function(){
                    $("#sixth").addClass("hidden");
                    $('#fifth').removeAttr('style');
                    $("#fifth").removeClass("hidden");
                    $("#fifth").addClass("animated");
                   
                    Animation.prototype.inView();
                }})
            }     
            
            if($("#seventh").hasClass("hidden") === false){
                TweenMax.to('#seventh', 1, {  opacity: 0, onComplete: function(){
                    $("#seventh").addClass("hidden");
                    $('#sixth').removeAttr('style');
                    $("#sixth").removeClass("hidden");
                    $("#sixth").addClass("animated");
                   
                    Animation.prototype.inView();
                }})
            }             

        })        
    }

    Animation.prototype.openRSVPModal = function(){
        $(".btn-yes").on("click",function(){
          $("#rsvp-modal").show();  
        })

        $(".btn-agree").on("click", function(){
            $(".ty-container").hide();
            $(".form-container").removeClass("hidden");
            $(".form-container").addClass("d-flex");
            $(".form-container").addClass("animated");
            Animation.prototype.inView();
        })

        $(".btn-submit").on("click", function(){
            $(".ty-container").hide();
            $(".form-container").addClass("hidden");
            $(".confirmation-container").removeClass("hidden");
            $(".confirmation-container").addClass("d-flex");
            $(".confirmation-container").addClass("animated");
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
        let promise = audio.play();


        // if (promise !== undefined) {
        //     promise.then(_ => {
        //       promise
        //     }).catch(error => {
        //         $('#play-pause-button').trigger("click");
        //     });
        //   }

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

    Animation.prototype.initSealModal = function(){

     
        $("#seal-modal").show();
        $("#seal-modal").on("click", function(){
            TweenMax.to('#seal-modal', 1, {  opacity: 0, onComplete: function(){
                $("#seal-modal").remove();
                Animation.prototype.playAudio();
                Animation.prototype.inView();
            }})
        })
        
        


    }

    Animation.prototype.detectIfMobile = function(){
        if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
        || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
            return true;
        }else {
            return false;
        }
    }

    Animation.prototype.sendDataToApi = function(){

        var form = document.getElementById("guest_form");
        async function handleSubmit(event) {
            event.preventDefault();
            var data = new FormData(event.target);
            fetch(event.target.action, {
              method: form.method,
              body: data,
              headers: {
                  'Accept': 'application/json'
              }
            }).then(response => {

              form.reset()
            }).catch(error => {

            });
        }
        form.addEventListener("submit", handleSubmit)
        
  
    }


    app.Animation = Animation;

    app.ready(function () {
        console.log('Animation Ready');
        Animation.prototype.init()
    })

    app.onLoad(function(){
        console.log('Animation Load');
        if(Animation.prototype.detectIfMobile() === false){
            Animation.prototype.inView()
            Animation.prototype.playAudio();
        }else {
            Animation.prototype.initSealModal();
        }
        // Animation.prototype.playAudio();
    })


})(window.app);