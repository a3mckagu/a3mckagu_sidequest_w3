// NOTE: Do NOT add setup() or draw() in this file
// setup() and draw() live in main.js

// ------------------------------------------------------------
// Choice 1 screen visuals
// ------------------------------------------------------------
// drawStart() is called from main.js only when:
// currentScreen === "start"
function drawChoice4Result1() {
  // Background colour for the start screen
  background(bgChoice4Result1); // soft teal background

  // ---- Title text ----

  fill(15, 35, 80);
  textFont("Playpen Sans");
  textSize(17);
  textLeading(30);
  textAlign(LEFT, CENTER);
  text(
    "This card keeps me moving between campuses. I always keep my eye on it.",
    width / 2 - 6,
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
    label: "TAP",
  };

  // Draw both buttons
  drawButton(decision1);

  // ---- Cursor feedback ----
  // If the mouse is over either button, show a hand cursor
  // so the player knows it is clickable
  const over = isHover(decision1);
  cursor(over ? HAND : ARROW);
}

// ------------------------------------------------------------
// Mouse input for choice2Result1 screen
// ------------------------------------------------------------
// Called from main.js only when currentScreen === "choice4Result1"
function choice4Result1MousePressed() {
  // For input checks, we only need x,y,w,h (label is optional)
  const decision1 = { x: width / 2, y: 580, w: 290, h: 52 };

  if (isHover(decision1)) {
    currentScreen = "win";
  }
}

// ------------------------------------------------------------
// Keyboard input for choice2Result1 screen
// ------------------------------------------------------------
// Provides keyboard shortcuts
function choice4Result1KeyPressed() {
  if (key === "1") {
    currentScreen = "win";
  }
  if (keyCode === ESCAPE) {
    currentScreen = "start";
  }
}
