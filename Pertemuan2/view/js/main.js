function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const li = document.createElement('li');
        li.className = 'flex justify-between items-center bg-blue-100 p-2 rounded shadow';

        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;
        taskSpan.className = 'text-blue-900 font-medium';

        const buttonContainer = document.createElement('div');
        buttonContainer.className = 'space-x-2';

        const selesaiButton = document.createElement('button');
        selesaiButton.className = 'btn btn-success';
        selesaiButton.textContent = 'SELESAI';
        selesaiButton.onclick = () => li.classList.toggle('line-through');

        const hapusButton = document.createElement('button');
        hapusButton.className = 'btn btn-error';
        hapusButton.textContent = 'HAPUS';
        hapusButton.onclick = () => taskList.removeChild(li);

        buttonContainer.appendChild(selesaiButton);
        buttonContainer.appendChild(hapusButton);

        li.appendChild(taskSpan);
        li.appendChild(buttonContainer);

        taskList.appendChild(li);
        taskInput.value = "";
    }
}
