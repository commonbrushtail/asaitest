
gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin(CSSRulePlugin);

let floatBooking = document.querySelector('.float-booking')
let overlayBookMenu = document.querySelector('.overlayBookMenu')
let closeButton = document.querySelector('.closeButton')
floatBooking.addEventListener('click',()=>{
    overlayBookMenu.classList.add('active')
    html.classList.add('active')
})

closeButton.addEventListener('click',()=>{
    overlayBookMenu.classList.remove('active')
    html.classList.remove('active')
})

let html = document.documentElement
let hamburger = document.querySelector('.hamburger')
let overlayNav = document.querySelector('.overlayNav')

function resetNavMenu(){
    document.querySelector('#sathornNavMenu').classList.remove('active')
    document.querySelector('#chinatownNavMenu').classList.remove('active')
}

function goBackToFirstMenuLayer(){
    overlayNav.classList.remove('secondLayer')
    returnButton.classList.remove('sathorn','chinatown')
}

hamburger.addEventListener('click',(e)=>{
    hamburger.classList.toggle('is-active');
    overlayNav.classList.toggle('active');
    html.classList.toggle('active');
})


let returnButton = document.querySelector('.returnButton')
returnButton.addEventListener('click',()=>{
    resetNavMenu();
    goBackToFirstMenuLayer()
})

let locationList = document.querySelectorAll('.locationList');
let addArrow = function(event){
    event.currentTarget.classList.toggle('active')
}

if(parseInt(window.innerWidth)>=992){
locationList.forEach(element => {
    element.addEventListener('mouseover',addArrow);
    element.addEventListener('mouseleave',addArrow);
    
});
}

let chinatownListMenu = document.querySelector('#chinatownNavMenu');
let sathornListMenu = document.querySelector('#sathornNavMenu');
let rightMenu = document.querySelector('.rightMenu');

locationList.forEach(element => {
    
    element.addEventListener('click',(e)=>{
        
        locationList.forEach(element => {
            element.removeEventListener('mouseover',addArrow);
            element.removeEventListener('mouseleave',addArrow);     
        });
       
        if(parseInt(window.innerWidth)>=992){
     
            if (e.currentTarget.dataset.locationNavTarget=="chinatown"){
                resetNavMenu()
                document.querySelector('#chinatownNavMenu').classList.add('active')
                locationList.forEach(element => {
                    element.classList.remove('active')
                });
                e.currentTarget.classList.add('active')
                rightMenu.dataset.backgroundImage ="chinaDefault"
            } else if(e.currentTarget.dataset.locationNavTarget=="sathorn"){
                resetNavMenu()
                document.querySelector('#sathornNavMenu').classList.add('active')
                locationList.forEach(element => {
                    element.classList.remove('active')
                });
                e.currentTarget.classList.add('active')
                rightMenu.dataset.backgroundImage ="sathornDefault"
            }

        } else if((parseInt(window.innerWidth)<=991)){
            overlayNav.classList.add('secondLayer')
            if(e.currentTarget.dataset.locationNavTarget == 'chinatown'){
                locationList.forEach(element => {
                    element.classList.remove('active')
                });
                resetNavMenu()
                document.querySelector('#chinatownNavMenu').classList.add('active')
                returnButton.classList.add('chinatown')
                
               
            } else if (e.currentTarget.dataset.locationNavTarget == 'sathorn'){
                locationList.forEach(element => {
                    element.classList.remove('active')
                });
                resetNavMenu()
                document.querySelector('#sathornNavMenu').classList.add('active')
                returnButton.classList.add('sathorn')
            }


        }
        

        
    })
});

let listForMenuBackground = document.querySelectorAll('[data-list-background]')

listForMenuBackground.forEach(element => {
    element.addEventListener('mouseover',(e)=>{
        let dataTarget = e.currentTarget.dataset.listBackground
        rightMenu.dataset.backgroundImage = dataTarget;
    })
});


let revealText = document.querySelectorAll('.revealText');
let dinTitle = document.querySelectorAll('.din-title');



   

revealText.forEach(section => {
    ScrollTrigger.create({
        trigger:section,
        start: "100 bottom",
        endTrigger:section ,
        end:"bottom center",
        
    
        
        onEnter:(i)=>{section.classList.add('active')},
        
            
    });


});
    














ScrollTrigger.create({
    start: "400 top",
    endTrigger:"html" ,
    end:"bottom top",
    toggleClass: {targets: "header,.svgHeaderIcon,.hamburger-inner", className: "scrolling",}
});




   



let line = document.querySelector('.cls-1')

function pathPrepare (element) {
    var lineLength = element.getTotalLength();
    element.style.strokeDasharray = lineLength;
    element.style.strokeDashoffset = lineLength;
    console.log(lineLength)
}

pathPrepare(line);

var controller = new ScrollMagic.Controller();

var tween = new TimelineMax()
.add(TweenMax.to(line, 1, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.9
.add(TweenMax.to(line, 1, {ease:Linear.easeNone}), 0);// change color during the whole thing


var scene = new ScrollMagic.Scene({triggerElement: ".membership", duration: 200, tweenChanges: false})
.setTween(tween)
//.addIndicators() // add indicators (requires plugin)
.addTo(controller);



let slidingText = document.querySelectorAll('.text');
let slidingTextLeft = document.querySelectorAll('.textLeft');
let textWrapLength = 4560;
let textWrap = document.querySelectorAll('.textWrap');
let count = 0


slidingText.forEach(text => {
    let innerContent = text.innerHTML
    let textNeeded = Math.ceil(textWrapLength / text.offsetWidth);
    

    if(text.classList.contains('textRight')){
        for (let i = 0; i < textNeeded; i++) {
            let textToAdd =  document.createElement("div")
            textToAdd.classList.add('text')
            textToAdd.classList.add('textRight')
            textToAdd.innerHTML = innerContent
            textWrap[count].appendChild(textToAdd)
        }
        count++
    

    } else if (text.classList.contains('textLeft')){
        for (let i = 0; i < textNeeded; i++) {
            let textToAdd =  document.createElement("div")
            textToAdd.classList.add('text')
            textToAdd.classList.add('textLeft')
            textToAdd.innerHTML = innerContent
            textWrap[count].appendChild(textToAdd)
        }
        count++
    }
    

   


    

});








gsap.to('.textRight',
{x:1000,
scrollTrigger:{
    trigger:'.text',
    start: "-300+top bottom",
    endTrigger:'.text' ,
    end:"+600+top center",
   
    scrub:true,
   
}
}

)

gsap.to('.textLeft',
{x:-1000,
scrollTrigger:{
    trigger:'.text',
    start: "-300+top bottom",
    endTrigger:'.text' ,
    end:"+600+top center",
    scrub:true,
   
}
}

)






var allCards = document.querySelectorAll('.card');
var left = document.querySelector('.left');
var right = document.querySelector('.right');
var offerCardWrap = document.querySelector('.offercard-wrap')





function initCards(card, index) {
  let removedCard = document.querySelector('.removed')
  
  if(removedCard){
   
      
        let removedCardContent = removedCard.innerHTML;
        let removedCardClass = Array.from(removedCard.classList)
        let cardToAdd = document.createElement('div')      
      
        removedCardClass.forEach(classToAdd => {
          cardToAdd.classList.add(classToAdd)
        });
        cardToAdd.classList.remove('removed')
        cardToAdd.classList.remove('moving')
        cardToAdd.innerHTML = removedCardContent
        console.log(cardToAdd)
        offerCardWrap.appendChild(cardToAdd)
        addHammer(cardToAdd)
        
        
          
     

  }

  var newCards = document.querySelectorAll('.card:not(.removed)');

  newCards.forEach(function (card, index) {
    card.style.zIndex = allCards.length - index;
    card.style.transform = 'scale(' + (20 - index) / 20 + ') translateY(-' + 40 * index + 'px)';
   
    
    
  });
if(removedCard){
setTimeout(() => {
  
    
    
    let toRemove = document.getElementsByClassName('removed');
    toRemove[0].remove()

    
      
  }, 100
);
}







}

initCards();



function addHammer(el){
  
    var hammertime = new Hammer(el);
  
    hammertime.on('pan', function (event) {
      el.classList.add('moving');
    });
  
    hammertime.on('pan', function (event) {
      if (event.deltaX === 0) return;
      if (event.center.x === 0 && event.center.y === 0) return;
  
      
  
      var xMulti = event.deltaX * 0.03;
      var yMulti = event.deltaY / 80;
      var rotate = xMulti * yMulti;
  
      event.target.style.transform = 'translate(' + event.deltaX + 'px, ' + event.deltaY + 'px) rotate(' + rotate + 'deg)';
    });
  
    hammertime.on('panend', function (event) {
    
  
      var moveOutWidth = document.body.clientWidth;
      var keep = Math.abs(event.deltaX) < 80 || Math.abs(event.velocityX) < 0.5;
  
      event.target.classList.toggle('removed', !keep);
      event.target.id = "removed"
  
      if (keep) {
        event.target.style.transform = '';
        
      } else {
        var endX = Math.max(Math.abs(event.velocityX) * moveOutWidth, moveOutWidth);
        var toX = event.deltaX > 0 ? endX : -endX;
        var endY = Math.abs(event.velocityY) * moveOutWidth;
        var toY = event.deltaY > 0 ? endY : -endY;
        var xMulti = event.deltaX * 0.03;
        var yMulti = event.deltaY / 80;
        var rotate = xMulti * yMulti;
        event.target.style.transform = 'translate(' + toX + 'px, ' + (toY + event.deltaY) + 'px) rotate(' + rotate + 'deg)';
        
        
        initCards();
      }
    });
  
}

allCards.forEach(function (el) {
  var hammertime = new Hammer(el);

  hammertime.on('pan', function (event) {
    el.classList.add('moving');
  });

  hammertime.on('pan', function (event) {
    if (event.deltaX === 0) return;
    if (event.center.x === 0 && event.center.y === 0) return;

    

    var xMulti = event.deltaX * 0.03;
    var yMulti = event.deltaY / 80;
    var rotate = xMulti * yMulti;

    event.target.style.transform = 'translate(' + event.deltaX + 'px, ' + event.deltaY + 'px) rotate(' + rotate + 'deg)';
  });

  hammertime.on('panend', function (event) {
  

    var moveOutWidth = document.body.clientWidth;
    var keep = Math.abs(event.deltaX) < 80 || Math.abs(event.velocityX) < 0.5;

    event.target.classList.toggle('removed', !keep);
    event.target.id = "removed"

    if (keep) {
      event.target.style.transform = '';
      
    } else {
      var endX = Math.max(Math.abs(event.velocityX) * moveOutWidth, moveOutWidth);
      var toX = event.deltaX > 0 ? endX : -endX;
      var endY = Math.abs(event.velocityY) * moveOutWidth;
      var toY = event.deltaY > 0 ? endY : -endY;
      var xMulti = event.deltaX * 0.03;
      var yMulti = event.deltaY / 80;
      var rotate = xMulti * yMulti;
      event.target.style.transform = 'translate(' + toX + 'px, ' + (toY + event.deltaY) + 'px) rotate(' + rotate + 'deg)';
      
      
      initCards();
    }
  });
});

function createButtonListener(love) {
  return function (event) {
    var cards = document.querySelectorAll('.card:not(.removed)');
    var moveOutWidth = document.body.clientWidth * 1.5;

    if (!cards.length) return false;

    var card = cards[0];
    card.classList.add('removed')
    

    if (love) {
      card.style.transform = 'translate(' + moveOutWidth + 'px, -100px) rotate(-30deg)';
    } else {
      card.style.transform = 'translate(-' + moveOutWidth + 'px, -100px) rotate(30deg)';
    }


    
    
    initCards();

    event.preventDefault();
  };
}

var leftListener = createButtonListener(false);
var rightListener = createButtonListener(true);

left.addEventListener('click', leftListener);
right.addEventListener('click', rightListener);







/* for ruunning animation for mthe first time
    document.querySelector('#accept').addEventListener('click',(e)=>{
        e.preventDefault()
        localStorage.setItem('eqho-consent',true)
        document.querySelector('.fixed-accept').classList.add('hide');
    })
    
    
    if(localStorage.getItem('eqho-consent')){
        document.querySelector('.fixed-accept').classList.add('hide');
    }
        

*/