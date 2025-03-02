// current date and time for date section and activity log section
const newDate = new Date().toDateString();
const splittedDate = newDate.split(' ');
const currentDay = splittedDate[0]+',';
const currentDate= splittedDate[1]+' '+ splittedDate[2]+ ' ' +splittedDate[3];
document.getElementById('taskDay').innerText = currentDay;
document.getElementById('taskDate').innerText = currentDate;


// complete button of all (tasks div)
const btnComplete = document.querySelectorAll('.btnComplete');
let taskAssigned = document.getElementById('taskAssigned');
let convertedTaskAssigned = parseInt(taskAssigned.innerText);
let taskComplete = document.getElementById('taskComplete').innerText;
let convertedTaskComplete = parseInt(taskComplete);

// container of activity log
const activityContainer = document.getElementById('activityContainer');


// loop for accessing each button from all (tasks div)
for (const btn of btnComplete) {
    btn.addEventListener('click', function (event) {

        if (convertedTaskAssigned > 0 && convertedTaskComplete > 1) {

            convertedTaskAssigned--;
            document.getElementById('taskAssigned').innerText = convertedTaskAssigned;

            convertedTaskComplete++;
            document.getElementById('taskComplete').innerText = convertedTaskComplete;
            alert('Board Updated Successfully!');


            btn.classList.add('btn-disabled');



            


            // Activity log (activities)

            const activityIssues = document.querySelectorAll('.issueName');

            const issueTitle = event.target.parentNode.parentNode.querySelector('h1').innerText;
    
            const activityContainer = document.getElementById('activityContainer');


            // task complete in activity log area
            const newBtn = document.createElement('button');
            newBtn.classList.add('btn', 'h-28', 'w-full', 'bg-slate-200','text-sm' ,'lg:text-xl', 'text-start', 'rounded-xl');
            const currentTime = new Date().toLocaleTimeString();
            newBtn.innerText = 'You have completed the task ' + issueTitle + ' at ' + currentTime;

            activityContainer.appendChild(newBtn)

            if(convertedTaskAssigned === 0){
                alert('Congrats!!! You have completed all the current task')
            }


        }

    })
}


