# Zombomb
### Interactive Frontend Development
### Second Milestone Project, Code Institute by Kervin Arias

### Content
1. [Introduction](#intro)
2. [Game Structure](#structure)
3. [UX Design](#ux-design)
4. [Code Structure](#code)
5. [Testing](#testing)

<a name="intro"></a>
**What's the aim of the game?**
The aim is to kill a flock of cannibal deadbirds that are attacking the planet by using the tank to shoot zombies. 

I came across a very useful library https://www.pixijs.com/ this is an open source game engine available to make stunning graphics. Another useful source is https://developer.mozilla.org/en-US/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript which explains step by step how to get familiar with game development.

In order to achieve the game's best performance it was important to use a game engine APIs such as PixiJS which buiilt-in functions game animations and actions.

### Requirements of the game 

**Game's Checklist**
This is a list of things we need to achieve on the coding:
* A canvas where the game is played (2D)
* Instructions how to play the game
* Game Components 
* Game Engine or API
* Score and timer 

<a name="structure"></a>
## Game Structure
As I was clueless how to start I followed the logic on this tutorial. https://github.com/kittykatattack/learningPixi. On this case study is shown the global scope variables and local functions to call and use those variables.

The first step was to get familiar with the game engine. If I wanted to work locally without waiting on my repository to update I had to get familiar with the UNIX command line and being able to set up a localhost, it's the only way PixiJS can simulate the interaction due to WebGL methods.

Next thing to achieve was the shooting action, I based mine on the coding solution: http://proclive.io/shooting-tutorial/ I used it because it was exactly what I needed. I wanted to rotate my player from a fixed position on my game area.

My next step was to get familiar with Sprites which are large files with all images that you're using in your game. The creation of a JSON file as an atlas to find and cut the elemnt we're using without having to load all images as single instruction each time. On this game, the JSON file was used to create the explosion effect when the birds are shot.

* To generate my JSON file I used: https://www.codeandweb.com/free-sprite-sheet-packer

### Shooting
To be able to shoot the zombies, I had to trigger an event on the "bullet" or `zombomb` in this case, to solve this, I decided to translate this `<div id="zombomb">` on Y coordinates and another `function` to call it back to the original position. This was achieved with `animate` and the call back function to reset the animation.


<a name="ux-design"></a>

### UX Design

**Canvas**
One of the first problem is to make the canvas responsive I added `class` for `canvas` element but it was stretching the image to the full width of the page making all graphics distorned. Pixi JS sorts this out by adjusting the canvas size to `canvas.width = window.innerWidth; canvas.height = window.innerHeight; renderer.resize(canvas.width, canvas.height);`. Now it's full responsive and letting the renderer decide the size with a css property set to 100%.
 

**UX - Checklist**
* Game logo and colour scheme
* Must be SVG or PNG graphics
* Icon that it's easy to recognise
* Clear instructions how to play
* Game Inter with an "allert" colour

<a name="code"></a>

# Code Structure
In order to achieve and understand the different part componing this project, I based my coding on this video tutorial https://www.youtube.com/watch?v=L07i4g-zhDA

### Collision of two sprites as killing action
Now it's time to kill some birds, I understand that if I'm making the 2 components to collide for that we need to creat the 2D axis.

### Explosion effect
I based my code on this solution: https://github.com/pixijs/pixi-particles/blob/master/docs/examples/js/ParticleExample.js I had to place my working variables into this code to make sure explosion effect works, in this case called Emitter.

<a name="testing"></a>

### Testing

My testing was constant from the beginning of my project. The first task was to make sure all files were properly connected my copying a simple javascript games from w3schools.com https://www.w3schools.com/graphics/tryit.asp?filename=trygame_default_gravity

I'm now checking that my code works too by simply `alert("hey!");` as the first line of my code.

To test PIXI.js functions I used its boilerplate platform online at: https://www.pixiplayground.com/#/edit

I want this testing section to be a journal of my debugging practices. I'm finding hard at the moment to debug with Jasmine. I'm using Chrome DevTools and https://developer.mozilla.org/ to find problem on my syntax.

One of the first problems that I'm having is to make an image active on the game getting the following error:

>Cannot read property 'getContext' of null

I was trying to use a component to make this component as an object but I read on developers mozilla:

> Warning: This object is only intended for code running with chrome privileges. Exposing the object to regular web code was a mistake. If you use this object on your web page, your site might break at any time! In current versions of Firefox only a few interfaces required for compatibility are still accessible. Don't use Components!

>mousemove on player not working

Thanks to the error notification on Google DevTools - Console I discovered that `mousemove` couldn't working because `funtions (e)` wasn't defined.

>Debug of my code
Finally I understood that I can use `console.log` inside a `function` to see if it's working what you're trying to do. ![DevTools marking errors](sources/readme-links/debug-example1.png) ![Console clear and working properly](sources/readme-links/debug-solution1.png)

I now encountered a problem. Using a simple option in Jquery to clone my `#bullet` on the game area and this was genereting a new `div` on my HTML file every time a click was triggered. So this `$("#zombomb").clone().appendTo("#gameArea");` wasn't a good idea.

![DevTools showing new divs created](sources/readme-links/cloning-div.jpg)
 **Solution**
 https://www.sitepoint.com/guide-jquery-animate-method/
I had to create a `var` from my `<div id"#">` and animate this object.

>Horizontal Scroll active, some margins off.
Using DevTools - CSS Grd Inspector I figured out that my game area had set `position: absolute;`, removed and it's respecting the grid on different devices now. 

>Can't control the speed from a Sprite
I current problem that I'm encountering right now it's my lack of understanding where to iterate parameters like speed to the pixi js engine. PIXI JS has a very good boiler to play https://www.pixiplayground.com/#/edit/DsTc1Aq0848CTPQRAiW__

**Solution**
I had to restructure my game to have my sprites, bullets or enemies, that repeat but don't create new objects as infinite loop on the DOM.

> SyntaxError: redeclaration of var bg
I had to be careful not to declare a variable more than once.

### References

I based my bird enemies on this illustration: https://www.deviantart.com/isnevertimeatall/art/Zombie-bird-26385180

**Understanding Jquery, SVG, etc**
https://www.tutorialrepublic.com/jquery-tutorial/

https://css-tricks.com/tag/svg/

**Shooting functions**
https://www.w3schools.com/jquery/eff_animate.asp
http://proclive.io/shooting-tutorial/

http://www.gobiznow.com/jquery-animation-and-effect-4.html

**Primary game structure**

https://www.freecodecamp.org/news/javascript-functions-af6f9186a553/

**My Coding Structure**
https://github.com/CodeExplainedRepo/FlappyBird-JavaScript/blob/master/flappyBird.js

https://www.freecodecamp.org/news/the-best-jquery-examples/

**Animations**
https://stackoverflow.com/questions/4422293/rotate-an-image-around-its-center-in-canvas/44964567#44964567
https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_animation2
https://stackoverflow.com/questions/25409023/ how-to-restart-reset-jquery-animation

**Jquery moving my character with mousemove**
https://www.w3schools.com/jquery/event_mouseover.asp



http://jsfiddle.net/88526/1/

https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_event_mousemove

https://www.w3schools.com/graphics/tryit.asp?filename=trygame_controllers_mouse