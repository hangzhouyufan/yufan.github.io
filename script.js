// 为所有锚点链接添加平滑滚动效果
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // 阻止默认的跳转行为
        e.preventDefault();
        
        // 使用 scrollIntoView 实现平滑滚动
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth' // 平滑滚动效果
        });
    });
});

// 监听页面滚动，实现导航栏背景透明度变化效果
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    
    // 当页面滚动超过50像素时，改变导航栏背景色
    if (window.scrollY > 50) {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)'; // 半透明白色
    } else {
        header.style.backgroundColor = '#fff'; // 完全不透明
    }
});