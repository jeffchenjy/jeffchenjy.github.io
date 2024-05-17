let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ' ]').classList.add('active')
            })
        }
    })
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

 // 獲取按鈕元素
 const downloadButton = document.getElementById('downloadButton');
 // 添加點擊事件監聽器
 downloadButton.addEventListener('click', () => {
      // 檔案的 URL
      const fileUrl = 'file/cv.pdf';

      // 使用 createElemenet 創建 a 標籤
      const link = document.createElement('a');

      // 將標籤的 href 屬性設置為檔案的 URL
      link.href = fileUrl;

      // 設置標籤的 download 屬性為要下載的檔案名稱
      link.download = 'Jeff Chen CV';

      // 將標籤添加到文檔中
      document.body.appendChild(link);

      // 模擬點擊標籤以開始下載檔案
      link.click();

      // 下載完成後移除標籤
      document.body.removeChild(link);
  });

//dynamicContent
// Function to show content
function showContent(type) {
    const content = document.getElementById('dynamicContent');
    if (type === 'skills') {
        content.innerHTML = `
            <ul>
                <li>Android Studio</li>
                <li>HTML/CSS/JavaScript</li>
                <li>Django</li>
                <li>MySQL/SQLite</li>
                <li>STM32 MCU</li>
            </ul>
        `;
    } else if (type === 'education') {
        content.innerHTML = `
            <ul>
                <li>M.S. in Electrical Engineering - National Formosa University</li>
                <li>B.S. in Electrical Engineering - National Formosa University</li>
            </ul>
        `;
    }
}
 // Show default content (skills) on page load
        document.addEventListener('DOMContentLoaded', () => {
            showContent('skills');
        });

// Add event listeners to buttons
document.getElementById('skillsButton').addEventListener('click', () => showContent('skills'));
document.getElementById('educationButton').addEventListener('click', () => showContent('education'));

document.addEventListener("DOMContentLoaded", function() {
    const circle = document.getElementById('circle');
    const icons = circle.getElementsByClassName('circle-icon');
    const radius = circle.clientWidth / 2;
    const iconCount = icons.length;
    const angleStep = (2 * Math.PI) / iconCount;
    const spacing = 20;

    for (let i = 0; i < iconCount; i++) {
        const icon = icons[i];
        const angle = i * angleStep;
        const iconSize = icon.getBoundingClientRect().width / 2; // 獲得圖標半寬
        const adjustedRadius = radius - iconSize - spacing;
        const x = radius + adjustedRadius * Math.cos(angle) - iconSize;
        const y = radius + adjustedRadius * Math.sin(angle) - iconSize;
        icon.style.left = `${x}px`;
        icon.style.top = `${y}px`;
    }
});


function redirectToProject(url) {
    const link = document.createElement('a');
    link.href = url;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

const project_item_1 = document.getElementById('projects-item-1');
project_item_1.addEventListener('click', () => {
    redirectToProject('https://jeffchenjy.github.io/project-1/');
});

const project_item_2 = document.getElementById('projects-item-2');
project_item_2.addEventListener('click', () => {
    redirectToProject('https://jeffchenjy.github.io/project-2/');
});