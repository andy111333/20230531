let x = 200;鍵盤輸入事件 KeyPressed，滑鼠按一下能做出左鍵，按兩下做出右鍵，按三下做出上鍵，按四下做出下鍵，按五下做出空白鍵
let y = 200;
let speed = 5;
let clickCount = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  // 畫一個移動的方快
  rect(x, y, 50, 50);
}

function keyPressed() {
  if (key === ' ') {
    // 空格鍵
    handleKey('space');
  }
}

function mousePressed() {
  clickCount++;
  if (clickCount === 1) {
    // 按一下
    handleKey('left');
  } else if (clickCount === 2) {
    // 按兩下
    handleKey('right');
  } else if (clickCount === 3) {
    // 按三下
    handleKey('up');
  } else if (clickCount === 4) {
    // 按四下
    handleKey('down');
  } else if (clickCount === 5) {
    // 按五下
    handleKey('space');
  }
  
  // 
  if (clickCount === 5) {
    clickCount = 0;
  }
}

function handleKey(key) {
  if (key === 'left') {
    // 左鍵
    x -= speed;
  } else if (key === 'right') {
    // 右鍵
    x += speed;
  } else if (key === 'up') {
    // 上鍵
    y -= speed;
  } else if (key === 'down') {
    // 下鍵
    y += speed;
  } else if (key === 'space') {
    // 空格鍵
    // 執行空格鍵的操作，例如發射子彈等
  }
}

