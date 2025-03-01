const newDate = document.getElementById('taskDate').innerText = new Date().toUTCString();
console.log(newDate)


const btnComplete = document.querySelectorAll('.btnComplete');
let taskAssigned = document.getElementById('taskAssigned').innerText;
let convertedTaskAssigned = parseInt(taskAssigned);
let taskComplete = document.getElementById('taskComplete').innerText;
let convertedTaskComplete = parseInt(taskComplete);

const activityContainer = document.getElementById('activityContainer');



for (const btn of btnComplete) {
    btn.addEventListener('click', function (event) {

        if (convertedTaskAssigned > 0 && convertedTaskComplete > 1) {
            convertedTaskAssigned--;
            let newTaskAssigned = document.getElementById('taskAssigned').innerText = convertedTaskAssigned;
            alert('Board Updated Sucessfully!');




            btn.classList.add('btn-disabled');

            // const activityContainer = document.getElementById('activityContainer');
            // activityContainer.classList.remove('hidden')


            convertedTaskComplete++;
            let newTaskComplete = document.getElementById('taskComplete').innerText = convertedTaskComplete;


            const activityIssues = document.querySelectorAll('.issueName');

            const issueTitle = event.target.parentNode.parentNode.querySelector('h1').innerText;
    
            const activityContainer = document.getElementById('activityContainer');


            // activity log area
            const newBtn = document.createElement('button');
            newBtn.classList.add('btn', 'h-28', 'w-full', 'bg-slate-200', 'text-xl', 'text-start', 'rounded-xl');
            const curennTime = new Date().toLocaleTimeString();
            newBtn.innerText = 'You have completed the task ' + issueTitle + ' at ' + curennTime;

            activityContainer.appendChild(newBtn)

            if(convertedTaskAssigned === 0){
                alert('Congrats!!! You have completed all the current task')
            }



        }

    })
}


