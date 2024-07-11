// 侧边栏
function toggleNav() {
    var sidebar = document.getElementById("sidebar");
    var main = document.getElementById("main");
    var toggleButton = document.querySelector('.togglebtn'); 
    if (sidebar.style.width === "250px") {
        sidebar.style.width = "0";
        main.style.marginLeft = "0";
        toggleButton.style.visibility = "visible";
        document.removeEventListener('click', handleOutsideClick);
    } else {
        sidebar.style.width = "250px";
        main.style.marginLeft = "250px";
        toggleButton.style.visibility = "hidden";
        setTimeout(() => {
            document.addEventListener('click', handleOutsideClick);
        }, 0);
    }
}
function closeNav() {
    var sidebar = document.getElementById("sidebar");
    var main = document.getElementById("main");
    var toggleButton = document.querySelector('.togglebtn');
    sidebar.style.width = "0";
    main.style.marginLeft = "0";
    toggleButton.style.visibility = "visible";
    document.removeEventListener('click', handleOutsideClick);
}

function handleOutsideClick(event) {
    var sidebar = document.getElementById("sidebar");
    var toggleButton = document.querySelector('.togglebtn');
    if (!sidebar.contains(event.target) && sidebar.style.width === "250px") {
        closeNav();
    }
}

function toggleCollapsible(element) {
    var content = element.nextElementSibling;
    var arrow = element.querySelector('.arrow');
    if (content.style.display === "block") {
        content.style.display = "none";
        arrow.classList.remove('down');
    } else {
        content.style.display = "block";
        arrow.classList.add('down');
    }
}

// 雨天控制
document.addEventListener("DOMContentLoaded", function() {
    const weatherButton = document.getElementById('weatherButton');

    // 监听天气按钮点击事件
    weatherButton.addEventListener('click', function() {
        toggleRain();
        if (rainInterval) {
            weatherButton.textContent = '🌧';
        } else {
            weatherButton.textContent = '☀';
        }
    });
});
