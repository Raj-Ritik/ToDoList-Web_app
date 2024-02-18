const inputBox = document.getElementById("inputbox");
const list = document.getElementById("lists");

function addTask() {
    if (inputBox.value === '')
        alert("oops!!! no task entered,Please enter a task");
    else if (inputBox.value.includes('<') == true)
        alert("No Hacking !!!");
    else {
        var li = document.createElement("li");
        li.innerHTML = inputBox.value;
        list.appendChild(li);
        li.style.color = "red";
        let span = document.createElement("span");
        span.innerHTML = '&#10007';
        li.appendChild(span);
    }
    inputBox.value = ''; 
    saveData() ;
}


list.addEventListener("click", function (event) {
    console.log(event);
    if ((event.target.tagName === "LI")&&(event.target.style.color!="blue")) {
        event.target.classList.add("checked");
        event.target.style.color="blue" ;
        saveData() ;
    }
    else if((event.target.tagName === "LI")&&(event.target.style.color==="blue"))
    {
        event.target.classList.remove("checked");
        event.target.style.color="red" ;
        saveData() ;
    }
    else if (event.target.tagName === "SPAN") {
        event.target.parentElement.remove(); //parent element is li 
        saveData() ;
    }
})


document.addEventListener("keypress", function (e) {
    console.log(e);
    if (e.key === "Enter") 
    addTask() ;
})

// data saving , so data data remain after reloading/refreshing/revisiting webpage

function saveData(){
    localStorage.setItem("data",list.innerHTML) ;
}
function displayData(){
    list.innerHTML = localStorage.getItem("data") ;
}

displayData() ;
