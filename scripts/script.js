const todayDate = document.getElementById("coto-date");
const currentDate = new Date();
todayDate.innerText = currentDate.toDateString();


        const cardTitle =document.querySelectorAll('.card-title');
        const historyLog =document.getElementById('history')

let task = 6;
let count = 23;
const btns = document.querySelectorAll('#completed')
for (const btn of btns)
    btn.addEventListener('click', function () {
        alert('board updated successfully')

        const taskKombe = document.getElementById('task').innerText;
        const convertTask = parseInt(taskKombe)
        const countBarbe = document.getElementById('count').innerText;
        const convertCount = parseInt(countBarbe);

        if (task > 0) {
            task--;
            count++;
        
            document.getElementById('task').innerText = task;
            document.getElementById('count').innerText = count;
        }
        else {
        }
        btn.setAttribute('disabled', true)
        



        const newElement = document.createElement("div");

    newElement.innerHTML = `
    <div class="bg-slate-100 p-3 mb-7 rounded-xl"> 
        <p> You have Complete The Task ${
          cardTitle.innerText 
        } at ${format12HourTime()} </p>
        </div>
    `;
    function format12HourTime() {
        const nowTime = new Date();
        let hours = nowTime.getHours();
        let minutes = nowTime.getMinutes();
        let seconds = nowTime.getSeconds();
        const amPm = hours >= 12 ? "PM" : "AM";
  
        hours = hours % 12 || 12;
  
        return `${hours}:${minutes}:${seconds} ${amPm}`;
      }
    historyLog.appendChild(newElement);
}); 


const colors = ["indigo", "#33FF57", "yellow", "pink", "#3357FF"]; 

    document.getElementById("changeBg").addEventListener("click", function() {
        const randomIndex = Math.floor(Math.random() * colors.length); 
        document.body.style.backgroundColor = colors[randomIndex]; 
    });





        











