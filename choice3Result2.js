// NOTE: Do NOT add setup() or draw() in this file
// setup() and draw() live in main.js

// ------------------------------------------------------------
// Choice 1 screen visuals
// ------------------------------------------------------------
// drawStart() is called from main.js only when:
// currentScreen === "start"
function drawChoice3Result2() {
  // Background colour for the start screen
  background(bgChoice3Result2); // soft teal background

  // ---- Title text ----

  fill(15, 35, 80);
  textFont("Playpen Sans");
  textSize(17);
  textLeading(30);
  textAlign(LEFT, CENTER);
  text(
    "The full 2-hour drive drags on, but I can’t help watching the city and the cars passing by.",
    width / 2 + 30,
    145,
    450,
  );

  // ---- Buttons (data only) ----
  // These objects store the position/size/label for each button.
  // Using objects makes it easy to pass them into drawButton()
  // and also reuse the same information for hover checks.
  const decision1 = {
    x: width / 2,
    y: 580, // Andreea changed manually
    w: 290,
    h: 52,
    label: "CONTINUE",
  };

  // Draw both buttons
  drawButton(decision1);

  // ---- Cursor feedback ----
  // If the mouse is over either button, show a hand cursor
  // so the player knows it is clickable.
  const over = isHover(decision1);
  cursor(over ? HAND : ARROW);
}

// ------------------------------------------------------------
// Mouse input for the start screen
// ------------------------------------------------------------
// Called from main.js only when currentScreen === "start"
function choice3Result2MousePressed() {
  // For input checks, we only need x,y,w,h (label is optional)
  const decision1 = { x: width / 2, y: 580, w: 290, h: 52 };
  const decision2 = { x: width / 2, y: 643, w: 290, h: 52 };
  if (isHover(decision1)) {
    currentScreen = "choice4";
  }
}

// ------------------------------------------------------------
// Keyboard input for the start screen
// ------------------------------------------------------------
// Provides keyboard shortcuts:
// - ENTER starts the game
// - I opens instructions
function choice3Result2KeyPressed() {
  if (key === "1") {
    currentScreen = "choice4";
  }

  if (keyCode === ESCAPE) {
    currentScreen = "start";
  }
}
