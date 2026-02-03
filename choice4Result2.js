// NOTE: Do NOT add setup() or draw() in this file
// setup() and draw() live in main.js

// ------------------------------------------------------------
// Choice 1 screen visuals
// ------------------------------------------------------------
// drawStart() is called from main.js only when:
// currentScreen === "start"
function drawChoice4Result2() {
  // Background colour for the start screen
  background(bgChoice4Result2); // soft teal background

  // ---- Title text ----

  fill(15, 35, 80);
  textFont("Playpen Sans");
  textSize(17);
  textLeading(30);
  textAlign(LEFT, CENTER);
  text("That won't bode well for me.", width / 2 + 22, 97, 390);

  // ---- Buttons (data only) ----
  // These objects store the position/size/label for each button.
  // Using objects makes it easy to pass them into drawButton()
  // and also reuse the same information for hover checks.
  const decision1 = {
    x: width / 2,
    y: 600, // Andreea changed manually
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
// Mouse input for choice4Result2 screen
// ------------------------------------------------------------
// Called from main.js only when currentScreen === "choice4Result2"
function choice4Result2MousePressed() {
  // For input checks, we only need x,y,w,h (label is optional)
  const decision1 = { x: width / 2, y: 600, w: 290, h: 52 };

  if (isHover(decision1)) {
    currentScreen = "lose";
  }
}

// ------------------------------------------------------------
// Keyboard input for choice4Result2 screen
// ------------------------------------------------------------
// Provides keyboard shortcuts
function choice4Result2KeyPressed() {
  if (key === "1") {
    currentScreen = "lose";
  }

  if (keyCode === ESCAPE) {
    currentScreen = "start";
  }
}
