const btnComplete = document.querySelectorAll('.btnComplete');
let taskAssigned = document.getElementById('taskAssigned').innerText;
let convertedTaskAssigned = parseInt(taskAssigned);
let taskComplete = document.getElementById('taskComplete').innerText;
let convertedTaskComplete = parseInt(taskComplete);

const activityContainer = document.getElementById('activityContainer');


for (const btn of btnComplete) {
    btn.addEventListener('click', function () {
        if (convertedTaskAssigned > 0 && convertedTaskComplete > 1) {
            convertedTaskAssigned--;
            let newTaskAssigned = document.getElementById('taskAssigned').innerText = convertedTaskAssigned;
            btn.classList.add('btn-disabled')


            convertedTaskComplete++;
            let newTaskComplete = document.getElementById('taskComplete').innerText = convertedTaskComplete;


            const activityIssues = document.querySelectorAll('.issueName');

            // Iterating over NodeList using for...of
            const issueName = btn.getAttribute('data-issue');
            console.log(issueName);  // Log the text of the individual issue

        }
    })
}


