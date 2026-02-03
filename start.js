// NOTE: Do NOT add setup() or draw() in this file
// setup() and draw() live in main.js
// This file only defines:
// 1) drawStart() → what the start/menu screen looks like
// 2) input handlers → what happens on click / key press on this screen
// 3) a helper function to draw menu buttons

// ------------------------------------------------------------
// Start screen visuals
// ------------------------------------------------------------
// drawStart() is called from main.js only when:
// currentScreen === "start"
function drawStart() {
  // Background colour for the start screen
  background(startBg); // image of bg bus

  // ---- Title text ----
  fill(254);
  textFont("Playpen Sans");
  textSize(74);
  textAlign(CENTER, CENTER);
  text("LAST CALL", width / 2, 152);

  textSize(16);
  text("A COMMUTER SIMULATOR", width / 2, 200); // Andreea added manually

  // ---- Buttons (data only) ----
  // These objects store the position/size/label for each button.
  // Using objects makes it easy to pass them into drawButton()
  // and also reuse the same information for hover checks.
  const startBtn = {
    x: width / 2,
    y: 560, // Andreea changed manually
    w: 290,
    h: 52,
    label: "START",
  };

  const instrBtn = {
    x: width / 2,
    y: 620, // Andreea changed manually
    w: 290,
    h: 52,
    label: "INSTRUCTIONS",
  };

  // Draw both buttons
  drawButton(startBtn);
  drawButton(instrBtn);

  // ---- Cursor feedback ----
  // If the mouse is over either button, show a hand cursor
  // so the player knows it is clickable.
  const over = isHover(startBtn) || isHover(instrBtn);
  cursor(over ? HAND : ARROW);
}

// ------------------------------------------------------------
// Mouse input for the start screen
// ------------------------------------------------------------
// Called from main.js only when currentScreen === "start"
function startMousePressed() {
  // For input checks, we only need x,y,w,h (label is optional)
  const startBtn = { x: width / 2, y: 560, w: 290, h: 52 };
  const instrBtn = { x: width / 2, y: 620, w: 290, h: 52 };

  // If START is clicked, go to the choice1 screen
  if (isHover(startBtn)) {
    currentScreen = "choice1";
  }
  // If INSTRUCTIONS is clicked, go to the instructions screen
  else if (isHover(instrBtn)) {
    currentScreen = "instr";
  }
}

// ------------------------------------------------------------
// Keyboard input for the start screen
// ------------------------------------------------------------
// Provides keyboard shortcuts:
// - ENTER starts the game
// - I opens instructions
function startKeyPressed() {
  if (keyCode === ENTER) {
    currentScreen = "choice1";
  }

  if (key === "i" || key === "I") {
    currentScreen = "instr";
  }
}

// ------------------------------------------------------------
// Helper: drawButton()
// ------------------------------------------------------------
// This function draws a button and changes its appearance on hover.
// It does NOT decide what happens when you click the button.
// That logic lives in startMousePressed() above.
//
// Keeping drawing separate from input/logic makes code easier to read.
function drawButton({ x, y, w, h, label }) {
  rectMode(CENTER);

  // Check if the mouse is over the button rectangle
  const hover = isHover({ x, y, w, h });

  noStroke();

  // ---- Visual feedback (hover vs not hover) ----
  // This is a common UI idea:
  // - normal state is calmer
  // - hover state is brighter + more “active”
  //
  // We also add a shadow using drawingContext (p5 lets you access the
  // underlying canvas context for effects like shadows).
  if (hover) {
    fill(255, 255, 255, 180); // more opaque on hover
  } else {
    fill(255, 255, 255, 140); // semi-transparent white
  }

  // Very thin outer white stroke
  stroke(254, 254, 254);
  strokeWeight(1.5);

  rect(x, y, w, h);

  // Draw the label text - dark navy for high contrast
  noStroke();
  fill(15, 35, 80);
  textSize(17);
  textStyle(BOLD);
  textAlign(CENTER, CENTER);
  text(label, x, y);
}
