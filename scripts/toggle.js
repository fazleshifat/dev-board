document.getElementById('blogBox')
    .addEventListener('click', function () {
        const blogSection = document.getElementById('blogSection');
        blogSection.classList.remove('hidden');
        const mainTaskSection = document.getElementById('mainTaskSection');
        mainTaskSection.classList.add('hidden');
        const activitySection = document.getElementById('activitySection');
        activitySection.classList.remove('lg:block');
        activitySection.classList.add('hidden');
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
document.getElementById('clearHistoryMobile')
    .addEventListener('click', function () {
        const activityContainer = document.getElementById('activityContainer');
        activityContainer.innerHTML = '';

    })


// function of changing background theme

document.getElementById('themeButton')
    .addEventListener('click', function () {
        let firstRgb = parseInt((Math.random() * 160));
        let secondRgb = parseInt((Math.random() * 263));
        let thirdRgb = parseInt((Math.random() * 288));
        let newTheme = `rgb(${firstRgb},${secondRgb},${thirdRgb})`;
        document.getElementById('body').style.backgroundColor = newTheme;

    })



// activity log for mobile (button toggle)

document.getElementById('activitySectionMobile')
.addEventListener('click',function(){
    document.getElementById('activitySection').classList.remove('hidden');
})

