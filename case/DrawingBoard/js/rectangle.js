var drawRectBtn = document.getElementById("juxing");

// 定义变量来保存鼠标点击时的坐标和矩形的宽度和高度
var startX, startY, width, height;

// 添加事件监听器，当按钮被点击时，绘制矩形
drawRectBtn.addEventListener("click", function () {
  canvas.addEventListener("mousedown", onMouseDown);
});

// 鼠标按下时记录坐标
function onMouseDown(e) {
  startX = e.clientX - canvas.offsetLeft;
  startY = e.clientY - canvas.offsetTop;

  // 添加mousemove和mouseup事件监听器，绘制矩形
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mouseup", onMouseUp);
}

// 鼠标移动时绘制矩形
function onMouseMove(e) {
  width = e.clientX - canvas.offsetLeft - startX;
  height = e.clientY - canvas.offsetTop - startY;

  // 清空画布并绘制矩形
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillRect(startX, startY, width, height);
}

// 鼠标松开时停止绘制
function onMouseUp() {
  canvas.removeEventListener("mousemove", onMouseMove);
  canvas.removeEventListener("mouseup", onMouseUp);
}
