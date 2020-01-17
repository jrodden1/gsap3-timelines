// Why Timelines are important

/* Currently, this block down here is abunch of "loose tweens" (they are running loose from one another)
The only reason they run in sequence is because they each have a delay that represents the duration of the previous tweens

gsap.from("#demo", {duration:1, opacity:0})
gsap.from("#title", {duration:1, delay:1, opacity:0, scale:0})
gsap.from("#freds img", {duration:0.5, delay:2, scale:0, stagger:0.5})
gsap.from("#time", {duration:1, delay:5, opacity:0, xPercent:100}) 

The issue is when you need to modify the timing "chain"  Lets say you wanted the title to come in 
really slowly - like 4 seconds.  If you then wanted the freds to come in after the title, 
you now have to modify the freds and anything else that is chained to the title timing - no bueno. 

This arrangement is also bad because if you change something at the end of the animation, you have to wait to play the entire thing
again before you can see your difference.  

If you want to repeat or control or pause or restart this animation as a whole, its a nightmare to try to do that. 
You need a container --> Enter Timelines 
*/

/* gsap.timeline()
   .from("#demo", {duration: 1, opacity:0}) //fades in the background
   .from("#title", {opacity:0, scale:0, ease:"back"}) // fades in the title "meet the freds" from being invisble and tiny to being full size and visble with a "back" ease.
   // Also note these tweens will be run in SEQUENTIAL order - one after the other
   .from("#freds img", {y:160, stagger:0.1, duration:0.8, ease:"back"})  //within the element that has the freds id, select all the img tags
   .from("#time", {xPercent:100, duration: 0.2}) //slides the element in from the right side - using xPercent is a great way to push stuff off screen
 */
// In the next section we'll talk about the Position parameter that will allow tweens within a timeline to overlap
/* 
The Position Parameter
comes after the options object
   .from("#demo", {duration: 1, opacity:0}, "+=1") -- the "+=1" part of this tween

   += syntax is relative timing position adjustment from its default sequential position
      Will probably use this notation 90% of the time

   < syntax means "always start at the beginning of the previous tween"
      if you want it to start just a little bit after the previous tween
      "<0.5" - will always start 1/2 second after the previous tween.

   1 syntax is Absolute Timing (manually typing in an integer or decimal)- it will always start at that absolute time in the tween

   Now we're going to put this into practice with the "freds" example below
*/

let animation = gsap.timeline()
   .from("#demo", {duration: 1, opacity:0}) //fades in the background
   .from("#title", {opacity:0, scale:0, ease:"back"}, 0.5) // fades in the title "meet the freds" from being invisble and tiny to being full size and visble with a "back" ease. - utilized absolute position param of "0.5"
   // Also note these tweens will be run in SEQUENTIAL order - one after the other
   .from("#freds img", {y:160, stagger:0.1, duration:0.8, ease:"back"}, "+=0.5")  //within the element that has the freds id, select all the img tags - using position param to add extra 0.5s to the relative position to when the tween was supposed to start (delay by .5 sec after previous tween)
   .from("#time", {xPercent:100, duration: 0.2}, "<") //slides the element in from the right side - using xPercent is a great way to push stuff off screen - and use position parameter of "<" to bind the last animation to always start at the same time as the previous tween

document.getElementById("play").onclick = ()=> animation.play();
document.getElementById("pause").onclick = ()=> animation.pause();
document.getElementById("reverse").onclick = ()=> animation.reverse();
document.getElementById("restart").onclick = ()=> animation.restart();