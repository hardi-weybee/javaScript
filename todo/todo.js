let input = document.querySelector('.input');
const addBtn = document.querySelector('.addBtn');
const ul = document.querySelector('.ul');
const searchBtn = document.querySelector('.searchBtn');
const select = document.getElementById('dropdown');
const sort = document.getElementById('dropdown1');
const container = document.querySelector('.list_container');
const no = document.querySelector('.no');
const groupBtn = document.querySelector('.groupBtn');
const firstBtn = document.querySelector('.first');
const secondBtn = document.querySelector('.second');
const thirdBtn = document.querySelector('.third');
const lightTheme = document.querySelector('.light-theme');
const standardTheme = document.querySelector('.standard-theme');


lightTheme.addEventListener('click', () => changeTheme('light'));
standardTheme.addEventListener('click', () => changeTheme('standard'));


let todoList = [];
let ids = 0;
let going = 0;
let active = 1;
let currentId = 0;
let editflag = false;
let taskSorted;

function changeTheme(color) {
    document.body.className = color;
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
        // alert("please enter something");
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
    todoList.forEach(items => {
        // console.log(currentId);
        const html = 
        `<div class="ul" id="all">
            <div class="itemText">
                <input type="checkbox" class="check" name='box' ${items.checked ? 'checked' : ''} onclick="ticked(${items.id})">       
                <div class="textedit"> ${editflag && currentId === items.id ? `<input type="text" class="editCheckBox" name="editBtn" value = "${items.text}" onkeypress="edit(event)">` : items.text }</div>
            </div>

            <div class = "itemBtn">
                <button class="editBtn" onclick="editItem(${items.id})"><img src="images/edit.png"></button>
                <button class="trashBtn" onclick="removeItem(${items.id})"><img src="images/delete.png"></button>
            </div>
        </div>`;
        // console.log(editflag);
        // console.log(html)
        container.insertAdjacentHTML('beforeend', html);
    })
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
            const s1 = taskSorted.slice().sort((a, b) => {
                const n0 = a.text.toUpperCase();
                const n1 = b.text.toUpperCase();
                if (n0 > n1) return 1;
                if (n0 < n1) return -1;
            })   
            taskSorted = s1;
            displayTodos(s1);
            console.log(s1);

            value.value = sort;
            sort.value = 'sort';
            break;

        case 'desc':
            const s2 = taskSorted.slice().sort((a, b) => {
                const n0 = a.text.toUpperCase();
                const n1 = b.text.toUpperCase();
                if (n0 > n1) return -1;
                if (n0 < n1) return 1;
            })
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
            todoList.map(el => el.checked = true);
            var checkBox = document.getElementsByName('box');
            for(const check of checkBox) {
                check.checked = true;
                // action.value = action;
            }
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
            var checkBox = document.getElementsByName('box');
            checkBox.forEach((check, i) => {
                if(check.checked) {
                    // console.log(todoList[i]);
                    todoList.splice(i);
                    displayTodos(todoList);
                }
            })
            break;
    }
}


firstBtn.addEventListener('click', () => {
    // e.preventDefault();
    going = 0;
    displayTodos(todoList);

    firstBtn.classList.add('active');
    secondBtn.classList.remove('active');
    thirdBtn.classList.remove('active');
});


secondBtn.addEventListener('click', () => {
    // e.preventDefault();
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

    firstBtn.classList.remove('active');
    secondBtn.classList.remove('active');
    thirdBtn.classList.add('active');
});
displayTodos(todoList);
// console.log(todoList);