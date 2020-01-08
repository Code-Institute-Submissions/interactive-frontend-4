# Zombomb
### Interactive Frontend Development
### Second Milestone Project, Code Institute by Kervin Arias

What's this all about?
This is a game that uses zoombies as bombs or granades to kill giant birds which are attacking the planet. I've got my inspiration from this article https://hackernoon.com/making-a-game-with-javascript-and-pixijs-part-1-e3235139cd6f

I came across a very useful library https://www.pixijs.com/ this is an open source available to make stunning graphics. Another useful source is https://developer.mozilla.org/en-US/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript which explains step by step how to get familiar with game development.

### Requirements of the game 

**What's the aim of the game?**
To kill the mama-queen bird and her flock using the zoombies we have as pandemic on the planet.

**Game's Checklist**
This are the things we need to have on the game:
* A canvas where the game is played (2D)
* Speech Bubbles with instructions how to play and hints
* Keys/arrows to navigate and shoot
* Game Score

**Game Responses**
The player is able to rotate the war tank and shoot zombies to targets (birds).

### UX Design

**Canvas**
One of the first problem is to make the canvas responsive I added `class` for `canvas` element but it was stretching the image to the full width of the page making all graphics distorned.

I have got that by leaving the canvas on the index.html file but the functions of the game are not working. With the same example of game I made the game work and it's fully responsive . 

**Checklist for the Zombie component**
* Must be a SVG or Gif graphic
* Icon that it's easy to recognise

### Code Structure
In order to achieve and understand the different part componing this project, I based my coding on this video tutorial https://www.youtube.com/watch?v=L07i4g-zhDA

To make the player active, I have to call a function within the canvas using this player/user as object with a function to rotate and shoot to the target.


### Testing

My testing was constant from the beginning of my project. The first task was to make sure all files were properly connected my copying a simple javascript games from w3schools.com https://www.w3schools.com/graphics/tryit.asp?filename=trygame_default_gravity

I'm now checking that my code works too by simply `alert("hey!");` as the first line of my code.

I want this testing section to be a journal of my debugging practices. I'm finding hard at the moment to debug with Jasmine. I'm using Chrome DevTools and https://developer.mozilla.org/ to find problem on my syntax.

One of the first problems that I'm having is to make an image active on the game getting the following error:

>Cannot read property 'getContext' of null

I was trying to use a component to make this component as an object but I read on developers mozilla:

> Warning: This object is only intended for code running with chrome privileges. Exposing the object to regular web code was a mistake. If you use this object on your web page, your site might break at any time! In current versions of Firefox only a few interfaces required for compatibility are still accessible. Don't use Components!



### References

**Primary game structure**
https://www.freecodecamp.org/news/javascript-functions-af6f9186a553/

**My Coding structure**
https://github.com/CodeExplainedRepo/FlappyBird-JavaScript/blob/master/flappyBird.js

https://www.freecodecamp.org/news/the-best-jquery-examples/

**Animations**
https://stackoverflow.com/questions/4422293/rotate-an-image-around-its-center-in-canvas/44964567#44964567

https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_animation2

**Jquery moving my character with mousemove**
http://jsfiddle.net/88526/1/

https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_event_mousemove

https://www.w3schools.com/graphics/tryit.asp?filename=trygame_controllers_mouse