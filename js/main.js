// main.js

// 示例的JavaScript代码，可以在此处添加更多功能
document.addEventListener("DOMContentLoaded", function() {
    console.log("文档加载完毕");
});

document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.blog-link');

    links.forEach(link => {
        link.addEventListener('click', function() {
            link.classList.add('visited-link');
            saveLinkState(link.href);
        });

        if (isLinkVisited(link.href)) {
            link.classList.add('visited-link');
        }
    });

    function saveLinkState(url) {
        localStorage.setItem(url, 'visited');
    }

    function isLinkVisited(url) {
        return localStorage.getItem(url) === 'visited';
    }
});
