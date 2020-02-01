describe("A suite", function() {
    it("contains spec with an expectation", function() {
        expect(true).toBe(true);
    });
});





// CODE FOR TESTING ---------
//  var movePlayer = $("#player");
//  var xp = 0,
//      yp = 0;
//   var loop = setInterval(function() {
// change 12 to alter damping higher is slower
//      xp += (mouseX - xp) / 12;
//      yp += (mouseY - yp) / 12;
//      movePlayer.css({ left: xp, top: yp });
//      }, 500);