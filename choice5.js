// NOTE: Do NOT add setup() or draw() in this file
// setup() and draw() live in main.js

// ------------------------------------------------------------
// Choice 5 screen visuals
// ------------------------------------------------------------
function drawChoice5() {
  background(bgChoice5 || color(200)); // fallback color if image missing

  fill(15, 35, 80);
  textFont("Playpen Sans");
  textSize(20);
  textAlign(CENTER, CENTER);
  text("CHOICE 5 - Coming Soon", width / 2, height / 2);
}

// Mouse input for choice5 screen
function choice5MousePressed() {
  // Placeholder
}

// Keyboard input for choice5 screen
function choice5KeyPressed() {
  if (keyCode === ESCAPE) {
    currentScreen = "start";
  }
}
