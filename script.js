// 获取页面元素
const lightOnBtn = document.getElementById('light-on');
const lightOffBtn = document.getElementById('light-off');
const brightnessSlider = document.getElementById('brightness-slider');
const lightStatus = document.getElementById('light-status');
const brightnessValue = document.getElementById('brightness-value');
const connectStatus = document.getElementById('connect-status');

// 初始状态设置
let isLightOn = false;
let brightness = 0;

// 页面加载自动连接后端
window.onload = function() {
 fetch("http://127.0.0.1:5000/api/msg")
 .then(res => res.json())
 .then(data => {
 console.log("后端数据：", data);
 alert(data.content);
 })
 .catch(err => {
 console.error("连接失败：", err);
 alert("前后端连接失败，请检查后端是否启动");
 });
};

// 点灯按钮点击事件
lightOnBtn.addEventListener('click', () => {
 fetch("http://127.0.0.1:5000/api/light/on", {
 method: "POST",
 headers: {"Content-Type": "application/json"}
 })
 .then(res => res.json())
 .then(data => {
 console.log("点灯响应：", data);
 isLightOn = true;
 brightness = 100;
 lightStatus.textContent = data.status.status;
 brightnessValue.textContent = `${brightness}%`;
 brightnessSlider.value = brightness;
 alert(data.message);
 })
 .catch(err => {
 console.error("点灯失败：", err);
 alert("点灯请求失败");
 });
});

// 关灯按钮点击事件
lightOffBtn.addEventListener('click', () => {
 fetch("http://127.0.0.1:5000/api/light/off", {
 method: "POST",
 headers: {"Content-Type": "application/json"}
 })
 .then(res => res.json())
 .then(data => {
 console.log("关灯响应：", data);
 isLightOn = false;
 brightness = 0;
 lightStatus.textContent = data.status.status;
 brightnessValue.textContent = `${brightness}%`;
 brightnessSlider.value = brightness;
 alert(data.message);
 })
 .catch(err => {
 console.error("关灯失败：", err);
 alert("关灯请求失败");
 });
});

// 亮度调节滑块事件
brightnessSlider.addEventListener('input', () => {
 brightness = brightnessSlider.value;
 brightnessValue.textContent = `${brightness}%`;
});

// 滑块松开时发送亮度到后端
brightnessSlider.addEventListener('change', () => {
 fetch("http://127.0.0.1:5000/api/light/brightness", {
 method: "POST",
 headers: {"Content-Type": "application/json"},
 body: JSON.stringify({brightness: parseInt(brightness)})
 })
 .then(res => res.json())
 .then(data => {
 console.log("亮度响应：", data);
 lightStatus.textContent = data.status.status;
 if (brightness > 0) {
 isLightOn = true;
 } else {
 isLightOn = false;
 }
 })
 .catch(err => {
 console.error("亮度调节失败：", err);
 });
});

// 模拟连接状态检测（每3秒检测一次）
setInterval(() => {
 fetch("http://127.0.0.1:5000/api/light/status")
 .then(res => res.json())
 .then(data => {
 connectStatus.textContent = '已连接';
 connectStatus.style.color = '#4cd964';
 })
 .catch(err => {
 connectStatus.textContent = '未连接';
 connectStatus.style.color = '#ef4444';
 });
}, 3000);