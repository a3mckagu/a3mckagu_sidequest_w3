// NOTE: Do NOT add setup() or draw() in this file
// setup() and draw() live in main.js

// ------------------------------------------------------------
// Choice 1 screen visuals
// ------------------------------------------------------------
// drawStart() is called from main.js only when:
// currentScreen === "start"
function drawChoice1() {
  // Background colour for the start screen
  background(bgChoice1); // soft teal background

  // ---- Title text ----

  fill(15, 35, 80);
  textFont("Playpen Sans");
  textSize(17);
  textLeading(30);
  textAlign(LEFT, CENTER);
  text(
    "After moving far from campus, I thought I'd get used to the early breakfasts and quiet sunrises. But when my morning alarm BUZZES, I open my eyes and remember, its time to rush.",
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
    label: "CHECK PHONE",
  };

  const decision2 = {
    x: width / 2,
    y: 643, // Andreea changed manually
    w: 290,
    h: 52,
    label: "RUN TO CATCH BUS",
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
function choice1MousePressed() {
  // For input checks, we only need x,y,w,h (label is optional)
  const decision1 = { x: width / 2, y: 580, w: 290, h: 52 };
  const decision2 = { x: width / 2, y: 643, w: 290, h: 52 };
  if (isHover(decision1)) {
    currentScreen = "choice1Result1";
  } else if (isHover(decision2)) {
    currentScreen = "choice2";
  }
}

// ------------------------------------------------------------
// Keyboard input for the start screen
// ------------------------------------------------------------
// Provides keyboard shortcuts:
// - ENTER starts the game
// - I opens instructions
function choice1KeyPressed() {
  if (key === "1") {
    currentScreen = "choice1Result1";
  }

  if (key === "2") {
    currentScreen = "choice2";
  }

  if (keyCode === ESCAPE) {
    currentScreen = "start";
  }
}
