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

### UX Design

**Canvas**
One of the first problem is to make the canvas responsive I added `class` for `canvas` element but it was stretching the image to the full width of the page making all graphics distorned.

I have got that by leaving the canvas on the index.html file but the functions of the game are not working. With the same example of game I made the game work and it's fully responsive . 

**Checklist for the Zombie component**
* Must be a SVG or Gif graphic
* Icon that it's easy to recognise

### Testing

My testing was constant from the beginning of my project. The first task was to make sure all files were properly connected my copying a simple javascript games from w3schools.com https://www.w3schools.com/graphics/tryit.asp?filename=trygame_default_gravity

I'm now checking that my code works too by simply `alert("hey!");` as the first line of my code.



### References

**Primary game structure**
https://www.freecodecamp.org/news/javascript-functions-af6f9186a553/
