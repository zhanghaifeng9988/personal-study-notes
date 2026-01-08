//NPC码农
// 当页面加载完成后执行的代码
document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('alertButton');
    button.addEventListener('click', () => {
        alert('按钮被点击了！');
    });
});
