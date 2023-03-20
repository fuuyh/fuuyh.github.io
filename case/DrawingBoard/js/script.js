// 设置一个常量 记录鼠标按下的状态
let painting = false;
// 存储位置
let startPoint = { x: undefined, y: undefined };
// 获取画布并设置2d
const canvas = document.getElementById('canvas');
//获得 2d 上下文对象
const ctx = canvas.getContext('2d');
// 先给canvas设置一个默认的高度和宽度
canvas.width = '600'
canvas.height = '450'
// 设置鼠标按下实践，按下鼠标代表开始画画
canvas.onmousedown = (e) => {
    // 获取 x y 设置给开始位置
    let x = e.offsetX;
    let y = e.offsetY;
    startPoint = { x, y };
    // 更改状态 为true 表示 按下
    painting = true
};
// 鼠标移动时 的 事件
canvas.onmousemove = (e) => {
    // 获取位置
    let x = e.offsetX;
    let y = e.offsetY;
    // 把 x y 赋值给新的 位置
    let newPoint = { x: x, y: y }
    if (painting) {
        drawLine(startPoint.x, startPoint.y, newPoint.x, newPoint.y);
        startPoint = newPoint;
    }
};

// 鼠标离开/抬起事件，表示话完了
canvas.onmouseup = () => {
    painting = false;
};

// 封装 画线的 方法
function drawLine(xStart, yStart, xEnd, yEnd) {
    ctx.beginPath();
    // 线宽
    ctx.lineWidth = 3;
    ctx.moveTo(xStart, yStart);
    ctx.lineTo(xEnd, yEnd);
    ctx.stroke()
    ctx.closePath
};

// 清空方法
// 获取清空按钮
const clear = document.getElementById('clear');
// 点击红色按钮也要清空
const close = document.getElementById('close')
// 设置点击清空画布方法
close.onclick = () => {
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height)  
}
clear.onclick = () => {
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height)  
};

// 保存功能
// 获取按钮
const save = document.getElementById('save');
// 设置方法
save.onclick = () => {
    const url = canvas.toDataURL('image/jpg');
    const a = document.createElement('a');
    a.href = url;
    a.download = '画板';
    a.target = '_blank';
    a.click();
};

// 最大化， 最小化
const windowBox = document.getElementById('windowBox');
const buttonBox = document.getElementById('buttonBox');
// 最大化的方法
buttonBox.addEventListener('click', (e) => {
    if (e.target.id == 'maximize') {
        windowBox.style.width = '100%';
        // 最大化在调整一下高度就行了
        windowBox.style.margin = '0';
        // canvas.width = '1280'
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight - 94

    } else if (e.target.id === 'minimize') {
        windowBox.style.width = '600px';
        windowBox.style.margin = 'auto';
        windowBox.style.marginTop = '10px';
        canvas.width = '600'
        canvas.height = '450'
    } else {
        return;
    }
})

// 线段，矩形，圆形，椭圆， 添加文字， 箭头