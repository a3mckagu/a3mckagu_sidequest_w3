// NOTE: Do NOT add setup() or draw() in this file
// setup() and draw() live in main.js

// ------------------------------------------------------------
// Choice 1 screen visuals
// ------------------------------------------------------------
// drawStart() is called from main.js only when:
// currentScreen === "start"
function drawChoice2Result2() {
  // Background colour for the start screen
  background(bgChoice2Result2); // soft teal background

  // ---- Title text ----

  fill(15, 35, 80);
  textFont("Playpen Sans");
  textSize(17);
  textLeading(30);
  textAlign(LEFT, CENTER);
  text(
    "Not the kind of impression I was hoping to make on the one person I see every morning. Maybe I should stick to my usual routine. ",
    width / 2 + 22,
    97,
    390,
  );

  // ---- Buttons (data only) ----
  // These objects store the position/size/label for each button.
  // Using objects makes it easy to pass them into drawButton()
  // and also reuse the same information for hover checks.
  const decision1 = {
    x: width / 2,
    y: 600, // Andreea changed manually
    w: 290,
    h: 52,
    label: "PAY WITH PRESTO CARD",
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
// Mouse input for choice2Result1 screen
// ------------------------------------------------------------
// Called from main.js only when currentScreen === "choice2Result2"
function choice2Result2MousePressed() {
  // For input checks, we only need x,y,w,h (label is optional)
  const decision1 = { x: width / 2, y: 600, w: 290, h: 52 };

  if (isHover(decision1)) {
    currentScreen = "choice3";
  }
}

// ------------------------------------------------------------
// Keyboard input for choice2Result2 screen
// ------------------------------------------------------------
// Provides keyboard shortcuts
function choice2Result2KeyPressed() {
  if (key === "1") {
    currentScreen = "choice3";
  }

  if (keyCode === ESCAPE) {
    currentScreen = "start";
  }
}
