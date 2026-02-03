// NOTE: Do NOT add setup() or draw() in this file
// setup() and draw() live in main.js

// Store the random message count so it doesn't change every frame
let choice3Result1MessageCount = 0;

// ------------------------------------------------------------
// Choice 1 screen visuals
// ------------------------------------------------------------
// drawStart() is called from main.js only when:
// currentScreen === "start"
function drawChoice3Result1() {
  // Generate random message count once on first load
  if (choice3Result1MessageCount === 0) {
    choice3Result1MessageCount = int(random(1, 41));
  }

  // Background colour for the start screen
  background(bgChoice3Result1);

  // ---- Title text ----

  fill(15, 35, 80);
  textFont("Playpen Sans");
  textSize(17);
  textLeading(30);
  textAlign(LEFT, CENTER);
  text(choice3Result1MessageCount + " new messages", width / 2 - 65, 330);

  // ---- Buttons (data only) ----
  // These objects store the position/size/label for each button.
  // Using objects makes it easy to pass them into drawButton()
  // and also reuse the same information for hover checks.
  const decision1 = {
    x: width / 2,
    y: 470, // Andreea changed manually
    w: 290,
    h: 52,
    label: "RESPOND",
  };

  const decision2 = {
    x: width / 2,
    y: 533, // Andreea changed manually
    w: 290,
    h: 52,
    label: "IGNORE",
  };

  // Draw both buttons
  drawButton(decision1);
  drawButton(decision2);

  // ---- Cursor feedback ----
  // If the mouse is over either button, show a hand cursor
  // so the player knows it is clickable.
  const over = isHover(decision1) || isHover(decision2);
  cursor(over ? HAND : ARROW);
}

// ------------------------------------------------------------
// Mouse input for the start screen
// ------------------------------------------------------------
// Called from main.js only when currentScreen === "choice3Result1"
function choice3Result1MousePressed() {
  // For input checks, we only need x,y,w,h (label is optional)
  const decision1 = { x: width / 2, y: 470, w: 290, h: 52 };
  const decision2 = { x: width / 2, y: 533, w: 290, h: 52 };

  // If RESPOND is clicked, go to choice4
  if (isHover(decision1)) {
    currentScreen = "choice3";
  }
  // If IGNORE is clicked, go to choice5
  else if (isHover(decision2)) {
    currentScreen = "choice3";
  }
}

// ------------------------------------------------------------
// Keyboard input for the start screen
// ------------------------------------------------------------
// Provides keyboard shortcuts:
// - ENTER starts the game
// - I opens instructions
function choice3Result1KeyPressed() {
  if (key === "1") {
    currentScreen = "choice3";
  }

  if (key === "2") {
    currentScreen = "choice3";
  }

  if (keyCode === ESCAPE) {
    currentScreen = "start";
  }
}
