let input = document.querySelector('.input');
const ul = document.querySelector('.ul');
const addBtn = document.querySelector('.addBtn');
const searchBtn = document.querySelector('.searchBtn');
const container = document.querySelector('.list_container');
const no = document.querySelector('.no');
const groupBtn = document.querySelector('.groupBtn');
const firstBtn = document.querySelector('.first');
const secondBtn = document.querySelector('.second');
const thirdBtn = document.querySelector('.third');
const lightTheme = document.querySelector('.light-theme');
const standardTheme = document.querySelector('.standard-theme');

const select = document.getElementById('dropdown');
const sort = document.getElementById('dropdown1');
const changeTheme = document.getElementById('favcolor');

let todoList = [];
let ids = 0;
let going = 0;
let active = 1;
let currentId = 0;
let editflag = false;
let taskSorted;

function change(color) {
    const hex = color.replace('#', '');
    const c_r = parseInt(hex.substr(0, 2), 16);
    const c_g = parseInt(hex.substr(2, 2), 16);
    const c_b = parseInt(hex.substr(4, 2), 16);
    const brightness = ((c_r * 299) + (c_g * 587) + (c_b * 114)) / 1000;
    return brightness > 155;
}

function theme() {
    document.body.style.backgroundColor = changeTheme.value;
    // console.log(document.querySelector('.textedit'))
    let ss = document.querySelectorAll('.textedit').length;
    // console.log(ss);
    if(change(changeTheme.value) == !true) {
        document.getElementsByClassName('instruction')[0].style.color = 'white';
        document.getElementById('title').style.color = 'white';
        document.getElementsByTagName('h3')[0].style.color = 'white';
        for(let i=0; i<ss; i++) {
            document.querySelectorAll('.textedit')[i].style.color = 'white';
            document.querySelectorAll('.editBtn')[i].innerHTML = '<img src="images/edit1.svg"></img>';
            document.querySelectorAll('.trashBtn')[i].innerHTML = '<img src="images/delete1.svg"></img>';
        }
    } else {
        document.getElementsByClassName('instruction')[0].style.color = 'black';
        document.getElementById('title').style.color = 'black';
        document.getElementsByTagName('h3')[0].style.color = 'black';
        for(let i=0; i<ss; i++) {
            document.querySelectorAll('.textedit')[i].style.color = 'black';
            document.querySelectorAll('.editBtn')[i].innerHTML = '<img src="images/edit.svg"></img>';
            document.querySelectorAll('.trashBtn')[i].innerHTML = '<img src="images/delete.svg"></img>';
        }
    }
}

input.addEventListener('keyup', function(e) {
    if(active == 1) {
        if(e.key === 'Enter') {
            // console.log('add');
            addBtn.click();
        } }
        else {
            // sconsole.log('search');
            searchBtn.click();
        }
});


addBtn.addEventListener('click', () => {
    active = 1;
    input.style.display = 'block';
    addBtn.classList.add('active');
    searchBtn.classList.remove('active');
    
    // input.classList.add('input')
    const task = input.value;
    if (task === '') {
        return false;
    }
    no.style.display = 'none';
    addItem(task);
})


const addItem = (text) => {
    const item = {
        text,
        checked: false,
        id : ++ids,
    };

    todoList.push(item);
    displayTodos(todoList);
    console.log(todoList);
    input.value = '';
}


const displayTodos = (todoList) => {
    container.innerHTML = '';

    if(todoList.length === 0) {
        no.style.display = 'block';
    } else {
        no.style.display = 'none';
        
        todoList.forEach(items => {
            // console.log(currentId);
            const html = 
            `<div class="ul" id="all">
                <div class="itemText">
                    <input type="checkbox" class="check" name='box' ${items.checked ? 'checked' : ''} onclick="ticked(${items.id})">       
                    <div class="textedit"> ${editflag && currentId === items.id ? `<input type="text" class="editCheckBox" name="editBtn" value = "${items.text}" onkeypress="edit(event)">` : items.text }</div>
                </div>
    
                <div class = "itemBtn">
                    <button class="editBtn" onclick="editItem(${items.id})"><img src="images/edit.svg"></button>
                    <button class="trashBtn" onclick="removeItem(${items.id})"><img src="images/delete.svg"></button>
                </div>
            </div>`;
            // console.log(editflag);
            // console.log(html)
            container.insertAdjacentHTML('beforeend', html);
        })
    }
    theme();
}
displayTodos(todoList);


const editItem = function(id) {
    currentId = id;
    // console.log(currentId);
    editflag = true;
    if(taskSorted) {
        displayTodos(taskSorted);
    } else {
        displayTodos(todoList);
    }
}


const edit = function(a) {
    // if(a.charCode === 13) {
    if(a.key === 'Enter') {
        const index = todoList.findIndex(x => x.id === currentId);
        todoList[index].text = document.getElementsByName('editBtn')[0].value;
        
        editflag = false;
        currentId = 0;
        // console.log(editflag)
        displayTodos(todoList);
    }
}


const removeItem = function(id) {
    const index = todoList.findIndex(x => x.id === id);
    todoList.splice(index, 1);
    displayTodos(todoList);
}


const ticked = function(id) {
    const index = todoList.findIndex(x => x.id === id);
    todoList[index].checked = !todoList[index].checked;
    console.log(index);
}


searchBtn.addEventListener('click', () => {
    
    active = 2;
    const searchText = input.value.toLowerCase();
    const x = todoList.filter(task => task.text.toLowerCase().includes(searchText));
    displayTodos(x);

    addBtn.classList.remove('active');
    searchBtn.classList.add('active');
    // input.value = '';
});


sort.onchange = function() {
    // e.preventDefault();
    const value = sort.options[sort.selectedIndex].value;
    console.log(value);

    if(going === 0) {
        taskSorted = todoList.slice();
    } else if (going === 1) {
        taskSorted = todoList.filter(x => x.checked === false);
    } else {
        taskSorted = todoList.filter(x => x.checked === true);
    }

    switch(value) {
        case 'asc':
            const s1 = taskSorted.slice().sort((a, b) => 
                a.text.toUpperCase().localeCompare(b.text.toUpperCase(), 'en', { numeric: true })
            )   
            taskSorted = s1;
            displayTodos(s1);
            console.log(s1);

            value.value = sort;
            sort.value = 'sort';
            break;

        case 'desc':
            const s2 = taskSorted.slice().sort((a, b) => 
                b.text.toUpperCase().localeCompare(a.text.toUpperCase(), 'en', { numeric: true })
            )
            taskSorted = s2;
            displayTodos(s2);
            console.log(s2);

            value.value = sort;
            sort.value = 'sort';
            break;

        case 'old':
            const s3 = taskSorted.slice().sort((a, b) => (a.id - b.id))
            taskSorted = s3;
            displayTodos(s3);
            console.log(s3);

            value.value = sort;
            sort.value = 'sort';
            break;

        case 'newe':
            const s4 = taskSorted.slice().sort((a, b) => (b.id - a.id))
            taskSorted = s4;
            displayTodos(s4);
            console.log(s4);

            value.value = sort;
            sort.value = 'sort';
            break;
    }
}


select.onchange = function() {
    const action = select.options[select.selectedIndex].value;
    console.log(action);

    switch(action) {
        case 'selectAll':
            if(active === 2) {
                const searchText = input.value.toLowerCase();
                const x = todoList.filter(task => task.text.toLowerCase().includes(searchText));
                x.map(el => el.checked = true);
                var checkBox = document.getElementsByName('box');
                for(const check of checkBox) {
                    check.checked = true;
                }
            } else {
                todoList.map(el => el.checked = true);
                var checkBox = document.getElementsByName('box');
                for(const check of checkBox) {
                    check.checked = true;
                }
            }

            action.value = action;
            select.value = 'action';
            break;

        case 'unselectAll':
            todoList.map(el => el.checked = false);
            var checkBox = document.getElementsByName('box');
            for(const check of checkBox) {
                check.checked = false;
            }
            action.value = action;
            select.value = 'action';
            // todoList.forEach(x => x.checked === false);
            // displayTodos(todoList);
            break;

        case 'deleteSelected':
            todoList = todoList.filter(x => x.checked === false);
            displayTodos(todoList);
            console.log(todoList);

            action.value = action;
            select.value = 'action';
            break;
    }
}


firstBtn.addEventListener('click', () => {
    going = 0;
    displayTodos(todoList);

    firstBtn.classList.add('active');
    secondBtn.classList.remove('active');
    thirdBtn.classList.remove('active');
});


secondBtn.addEventListener('click', () => {
    going = 1;
    const active = todoList.filter(x => x.checked === false);
    console.log(active);
    displayTodos(active); 

    firstBtn.classList.remove('active');
    secondBtn.classList.add('active');
    thirdBtn.classList.remove('active');
});


thirdBtn.addEventListener('click', () => {
    going = 2;
    const complete = todoList.filter(x => x.checked === true);
    console.log(complete);
    displayTodos(complete);

    thirdBtn.classList.add('active');
    firstBtn.classList.remove('active');
    secondBtn.classList.remove('active');
});
displayTodos(todoList);