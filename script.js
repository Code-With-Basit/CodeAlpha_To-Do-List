const inputbox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function Addtask() {
    if (inputbox.value === '') {
        alert("You must write something!");
        return; // Stop execution if the input is empty
    } else {
        let li = document.createElement('li');
        li.innerHTML = inputbox.value;
        listContainer.appendChild(li);
        
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        
        // Save data to localStorage after adding new task
        saveData();
    }
    
    // Clear the input box after adding task
    inputbox.value = "";
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showtask() {
    const savedData = localStorage.getItem('data');
    if (savedData) {
        listContainer.innerHTML = savedData;
    }
}

showtask();
