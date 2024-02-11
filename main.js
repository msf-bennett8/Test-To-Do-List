const inputBox = document.getElementById("input-box");
//line 2 is for enter button
const addButton = document.getElementById("add-button");
const listContainer = document.getElementById("list-container");

//Function to add task
function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData(); 
    }
    else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();

// Function to handle keypress event
function handleKeyPress(event) {
    if (event.keyCode === 13) { // Check if Enter key is pressed
        addTask(); // Call addTask function when Enter key is pressed
    }
}

// Add event listener to input field for keypress event
inputBox.addEventListener("keypress", handleKeyPress);
