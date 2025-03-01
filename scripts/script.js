    let task = 6;
    let count = 23;

        const btns = document.querySelectorAll('#completed')
        for (const btn of btns)
        btn.addEventListener('click', function (event) {
        event.preventDefault();
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
        else{
            
        }
    })