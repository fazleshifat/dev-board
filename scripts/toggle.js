document.getElementById('blogBox')
    .addEventListener('click', function () {
        const blogSection = document.getElementById('blogSection');
        blogSection.classList.remove('hidden');
        const mainTaskSection = document.getElementById('mainTaskSection');
        mainTaskSection.classList.add('hidden');
        const activitySection = document.getElementById('activitySection');
        activitySection.classList.remove('lg:block');
        const backHomeBtn = document.getElementById('backHomeBtn');
        backHomeBtn.classList.remove('hidden');
        const navButtons = document.getElementById('navButtons');
        navButtons.classList.add('hidden');
    })


document.getElementById('backHomeBtn')
    .addEventListener('click', function () {
        window.location.href = "index.html";
    });

document.getElementById('clearHistory')
    .addEventListener('click', function () {
        const activityContainer = document.getElementById('activityContainer');
        activityContainer.innerHTML = '';

    })

// theme

const bgTheme = ['bg-black', 'bg-green', 'bg-yellow']


// document.getElementById('themeButton')
//     .addEventListener('click', function (event) {
//         for (const theme of bgTheme) {
//             const currentTheme = document.getElementById('body');
//             let newTheme = currentTheme.classList.add(theme);
//             bgTheme.shift(newTheme);
//             console.log(bgTheme)
//             event.target.newTheme
//             newTheme = 
//         }
//     })

