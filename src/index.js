const newTodo = document.getElementById('newtodo');
const ul = document.getElementById("myUL")
const footer = document.getElementById('myFOOTER');
const completeAll = document.getElementById('completeAll')
const todoCount = document.getElementById('todoCount')

const liList = document.getElementsByTagName('li');
const completed = document.getElementsByClassName('completed');

const buttonAll = document.getElementById('buttonAll')
const buttonActive = document.getElementById('buttonActive')
const buttonCompleted = document.getElementById('buttonCompleted')
const buttonDeleteCompleted = document.getElementById("deleteCompleted");

buttonAll.onclick = () => {
    for (let li of liList) {
        li.style.display = 'block';
    }
}
buttonActive.onclick = () => {
    for (let li of liList) {
        if(li.className == 'completed'){
        li.style.display = 'none';
        } else {
            li.style.display = 'block';
        }
    }
}
buttonCompleted.onclick = () => {
    for (let li of liList) {
        if(li.className == 'completed'){
            li.style.display = 'block';
        } else{
            li.style.display = 'none';
        }
    }
}

buttonDeleteCompleted.onclick = () => {
    if(completed){
        while(completed.length) {
            let li = completed[0]
            ul.removeChild(li);
        }
        checkEmptyList();
        countTasks();
    }
}

newTodo.addEventListener('keydown', (event) => {
    if(event.key == "Enter"){
        addTask();
        checkEmptyList();
        countTasks();
    }
})

function countTasks(){  
    let list = document.getElementsByTagName('li');
    let completed = document.getElementsByClassName('completed');

    todoCount.textContent = (list.length - completed.length) + " items left";
}

completeAll.onclick = function(){
    let list = document.getElementsByTagName('li');
    let completed = document.getElementsByClassName('completed');
    let isFullList = (list.length == completed.length);
        for(let li of list) {
            if (![...completed].includes(li)) {
                li.classList.add('completed')
                li.childNodes[1].classList.add('checked')
                countTasks();
            }
            if(isFullList){
                li.classList.remove('completed')
                li.childNodes[1].classList.remove('checked')
                countTasks();
            }
        }
}


function checkEmptyList() {
    footer.style.display = (document.getElementsByTagName('LI').length == 0) ? "none" : "table";
}

var close = document.getElementsByClassName("close");

function addTask() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("newtodo").value;
    var text = document.createTextNode(inputValue);
        li.appendChild(text);
    if (inputValue !== '') {
        document.getElementById("myUL").appendChild(li);
        document.getElementById("newtodo").value = "";

        var span = document.createElement("span");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);

        let select = document.createElement("span")
        select.className = "select"

        li.appendChild(select);
        li.appendChild(span);

        for (let i = 0; i < close.length; i++) {
            close[i].onclick = function() {
                var div = this.parentElement;
            ul.removeChild(div);
            checkEmptyList();
            countTasks();
        }
     }
    }
}

const list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'SPAN') {
    ev.target.classList.toggle('checked')

    const li = ev.target.parentElement;
    li.classList.toggle('completed');
    countTasks();
  }
}, false);

