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

gsap.timeline()
   .from("#demo", {duration: 1, opacity:0}) //fades in the background
   .from("#title", {opacity:0, scale:0, ease:"back"})