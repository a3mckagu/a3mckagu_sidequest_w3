// ------------------------------------------------------------
// main.js = the “router” (traffic controller) for the whole game
// ------------------------------------------------------------
//
// Idea: this project has multiple screens (start, instructions, game, win, lose).
// Instead of putting everything in one giant file, each screen lives in its own
// file and defines two main things:
//   1) drawX()         → how that screen looks
//   2) XMousePressed() / XKeyPressed() → how that screen handles input
//
// This main.js file does 3 important jobs:
//   A) stores the current screen in a single shared variable
//   B) calls the correct draw function each frame
//   C) sends mouse/keyboard input to the correct screen handler

// ------------------------------
// Global game state
// ------------------------------
// This variable is shared across all files because all files run in the same
// global JavaScript scope when loaded in index.html.
//
// We store the “name” of the current screen as a string.
// Only one screen should be active at a time.
let currentScreen = "start"; // "start" | "instr" | "game" | "win" | "lose"

// ------------------------------
// setup() runs ONCE at the beginning
// ------------------------------
// This is where you usually set canvas size and initial settings.
function setup() {
  //edited without GenAI
  startBg = loadImage("assets/start-screen."); //loading image
  startBgv2 = loadImage("assets/start-screen2.PNG"); //loading image animation alternative

  bgChoice1 = loadImage("assets/choice1.PNG"); //first choice = waking up sequence
  bgChoice1v2 = loadImage("assets/choice1-2.PNG"); //first choice animation alternative

  bgChoice1Result1 = loadImage("assets/choice1-result1.PNG"); // checking phone

  bgChoice2 = loadImage("assets/choice2.PNG"); //catching the bus

  bgChoice2Result1 = loadImage("assets/choice2-result1.PNG"); // pay with PRESTO
  bgChoice2Result2 = loadImage("assets/choice2-result2.PNG"); // angry bus driver due to not paying

  bgChoice3 = loadImage("assets/choice3.PNG"); //sitting on the bus

  bgChoice3Result1 = loadImage("assets/choice3-result1.PNG"); // checking phone
  bgChoice3Result2 = loadImage("assets/choice3-result2.PNG"); // looking out window

  bgChoice4 = loadImage("assets/choice4.PNG"); // getting off the bus
  bgChoice4Result1 = loadImage("assets/choice4-result1.PNG"); // scan WATCARD
  bgChoice4Result2 = loadImage("assets/choice4-result2.PNG"); // angry bus driver due to not scanning WATCARD

  bgChoice5 = loadImage("assets/choice5.PNG"); // sitting on second bus of the day
  bgChoice5Result1 = loadImage("assets/choice5-result1.PNG"); // checking phone
  bgChoice5Result2 = loadImage("assets/choice5-result2.PNG"); // looking out window

  createCanvas(656, 800);

  // Sets a default font for all text() calls
  // (This can be changed later per-screen if you want.)
  textFont("sans-serif");
}

// ------------------------------
// draw() runs every frame (many times per second)
// ------------------------------
// This is the core “router” for visuals.
// Depending on currentScreen, we call the correct draw function.
function draw() {
  // Each screen file defines its own draw function:
  //   start.js         → drawStart()
  //   instructions.js  → drawInstr()
  //   choice1.js          → drawChoice1()
  //   game.js          → drawGame()
  //   win.js           → drawWin()
  //   lose.js          → drawLose()

  if (currentScreen === "start") drawStart();
  else if (currentScreen === "instr") drawInstr();
  else if (currentScreen === "choice1")
    drawChoice1(); // Andreea added choice1 screen
  else if (currentScreen === "choice1Result1")
    drawChoice1Result1(); // Andreea added choice1 screen
  else if (currentScreen === "choice2")
    drawChoice2(); // Andreea added choice1 screen
  else if (currentScreen === "choice2Result1")
    drawChoice2Result1(); // Andreea added choice1 screen
  else if (currentScreen === "choice2Result2")
    drawChoice2Result2(); // Andreea added choice1 screen
  else if (currentScreen === "choice3")
    drawChoice3(); // Andreea added choice3 screen
  else if (currentScreen === "choice3Result1")
    drawChoice3Result1(); // Andreea added choice1 screen
  else if (currentScreen === "choice3Result2")
    drawChoice3Result2(); // Andreea added choice1 screen
  else if (currentScreen === "choice4")
    drawChoice4(); // Andreea added choice4 screen
  else if (currentScreen === "choice4Result1")
    drawChoice4Result1(); // Andreea added choice1 screen
  else if (currentScreen === "choice4Result2")
    drawChoice4Result2(); // Andreea added choice1 screen
  else if (currentScreen === "choice5")
    drawChoice5(); // Andreea added choice5 screen
  else if (currentScreen === "game") drawGame();
  else if (currentScreen === "win") drawWin();
  else if (currentScreen === "lose") drawLose();

  // (Optional teaching note)
  // This “if/else chain” is a very common early approach.
  // Later in the course you might replace it with:
  // - a switch statement, or
  // - an object/map of screens
}

// ------------------------------
// mousePressed() runs once each time the mouse is clicked
// ------------------------------
// This routes mouse input to the correct screen handler.
function mousePressed() {
  // Each screen *may* define a mouse handler:
  // start.js         → startMousePressed()
  // instructions.js  → instrMousePressed()
  // game.js          → gameMousePressed()
  // win.js           → winMousePressed()
  // lose.js          → loseMousePressed()

  if (currentScreen === "start") startMousePressed();
  else if (currentScreen === "instr") instrMousePressed();
  else if (currentScreen === "choice1") choice1MousePressed();
  else if (currentScreen === "choice1Result1") choice1Result1MousePressed();
  else if (currentScreen === "choice2") choice2MousePressed();
  else if (currentScreen === "choice2Result1") choice2Result1MousePressed();
  else if (currentScreen === "choice2Result2") choice2Result2MousePressed();
  else if (currentScreen === "choice3") choice3MousePressed();
  else if (currentScreen === "choice3Result1") choice3Result1MousePressed();
  else if (currentScreen === "choice3Result2") choice3Result2MousePressed();
  else if (currentScreen === "choice4") choice4MousePressed();
  else if (currentScreen === "choice4Result1") choice4Result1MousePressed();
  else if (currentScreen === "choice4Result2") choice4Result2MousePressed();
  else if (currentScreen === "choice5") choice5MousePressed();
  else if (currentScreen === "game") gameMousePressed();
  // The ?.() means “call this function only if it exists”
  // This prevents errors if a screen doesn’t implement a handler.
  else if (currentScreen === "win") winMousePressed?.();
  else if (currentScreen === "lose") loseMousePressed?.();
}

// ------------------------------
// keyPressed() runs once each time a key is pressed
// ------------------------------
// This routes keyboard input to the correct screen handler.
function keyPressed() {
  // Each screen *may* define a key handler:
  // start.js         → startKeyPressed()
  // instructions.js  → instrKeyPressed()
  // game.js          → gameKeyPressed()
  // win.js           → winKeyPressed()
  // lose.js          → loseKeyPressed()

  if (currentScreen === "start") startKeyPressed();
  else if (currentScreen === "instr") instrKeyPressed();
  else if (currentScreen === "game") gameKeyPressed?.();
  else if (currentScreen === "choice1") choice1KeyPressed();
  else if (currentScreen === "choice1Result1") choice1Result1KeyPressed();
  else if (currentScreen === "choice2") choice2KeyPressed();
  else if (currentScreen === "choice2Result1") choice2Result1KeyPressed();
  else if (currentScreen === "choice2Result2") choice2Result2KeyPressed();
  else if (currentScreen === "choice3") choice3KeyPressed();
  else if (currentScreen === "choice3Result1") choice3Result1KeyPressed();
  else if (currentScreen === "choice3Result2") choice3Result2KeyPressed();
  else if (currentScreen === "choice4") choice4KeyPressed();
  else if (currentScreen === "choice4Result1") choice4Result1KeyPressed();
  else if (currentScreen === "choice4Result2") choice4Result2KeyPressed();
  else if (currentScreen === "choice5") choice5KeyPressed();
  else if (currentScreen === "win") winKeyPressed?.();
  else if (currentScreen === "lose") loseKeyPressed?.();
}

// ------------------------------------------------------------
// Shared helper function: isHover()
// ------------------------------------------------------------
//
// Many screens have buttons.
// This helper checks whether the mouse is inside a rectangle.
//
// Important: our buttons are drawn using rectMode(CENTER),
// meaning x,y is the CENTRE of the rectangle.
// So we check mouseX and mouseY against half-width/half-height bounds.
//
// Input:  an object with { x, y, w, h }
// Output: true if mouse is over the rectangle, otherwise false
function isHover({ x, y, w, h }) {
  return (
    mouseX > x - w / 2 && // mouse is right of left edge
    mouseX < x + w / 2 && // mouse is left of right edge
    mouseY > y - h / 2 && // mouse is below top edge
    mouseY < y + h / 2 // mouse is above bottom edge
  );
}
