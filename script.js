function gotoPage(page) {
    window.location.href = page;
}

function gotoPageSection(page, sectionID) {
    window.location.href = page + '#' + sectionID;
}


const toggleButton = document.getElementById('theme-toggle');

// 1. Check localStorage
const savedTheme = localStorage.getItem('theme');

// 2. If no saved theme, detect system preference
if (!savedTheme) {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
} else if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
}

// 3. Toggle theme when button is clicked
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
})