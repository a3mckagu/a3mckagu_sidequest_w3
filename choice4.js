// NOTE: Do NOT add setup() or draw() in this file
// setup() and draw() live in main.js

// ------------------------------------------------------------
// Choice 4 screen visuals
// ------------------------------------------------------------
// drawStart() is called from main.js only when:
// currentScreen === "start"
function drawChoice4() {
  // Background colour for the start screen
  background(bgChoice4); // soft teal background
  // ---- Title text ----

  fill(15, 35, 80);
  textFont("Playpen Sans");
  textSize(17);
  textLeading(30);
  textAlign(LEFT, CENTER);
  text(
    "My ride to University of Waterloo main campus is always productive. It's getting to Stratford from here that's tricky... I have to board another bus.",
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
    label: "SHOW WATCARD",
  };

  const decision2 = {
    x: width / 2,
    y: 643, // Andreea changed manually
    w: 290,
    h: 52,
    label: "DON'T SHOW",
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
// Called from main.js only when currentScreen === "start"
function choice4MousePressed() {
  // For input checks, we only need x,y,w,h (label is optional)
  const decision1 = { x: width / 2, y: 580, w: 290, h: 52 };
  const decision2 = { x: width / 2, y: 643, w: 290, h: 52 };
  if (isHover(decision1)) {
    currentScreen = "choice4Result1";
  } else if (isHover(decision2)) {
    currentScreen = "choice4Result2";
  }
}

// ------------------------------------------------------------
// Keyboard input for the start screen
// ------------------------------------------------------------
// Provides keyboard shortcuts:
// - ENTER starts the game
// - I opens instructions
function choice4KeyPressed() {
  if (key === "1") {
    currentScreen = "choice4Result1";
  }

  if (key === "2") {
    currentScreen = "choice4Result2";
  }

  if (keyCode === ESCAPE) {
    currentScreen = "start";
  }
}
