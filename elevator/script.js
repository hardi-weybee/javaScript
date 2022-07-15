'use strict';

const elevator = document.getElementsByClassName('elevator');
const toggle = document.getElementsByClassName('toggle');
const buttons = document.getElementsByTagName('button');
const all = document.getElementsByClassName('all')[0];
const container = document.querySelector('.container');

console.log(elevator);
console.log(toggle);

let lift = 3;
let floorNo = 5;
let liftDetail = [];


function maintain(i) {
    if(toggle[i].checked) {
        liftDetail[i].maintenance = true;
        liftDetail[i].floor = 1;
        movement(i, 1);
        elevator[i].style.border = '2px solid red';
        alert(`whops !! Elevator ${i + 1} is under maintenence`);
    } else {
        liftDetail[i].maintenance = false;
        elevator[i].style.border = 'none';
    }

    if(liftDetail.every(a => a.maintenance)) {
        for(const b of buttons)
            b.disabled = true;
    } else {
        for(const b of buttons)
            b.disabled = false;
    }
}

function movement(liftNo, no) {
    elevator[liftNo].style.top = `${floorNo - no}00`;
    elevator[liftNo].innerHTML = no;
    liftDetail[liftNo].floor = no;

    // let id = null;   
    // let pos = `${floorNo - liftDetail[liftNo].floor}00`;
    // const dest = `${floorNo - no}00`
    // clearInterval(id);
    // id = setInterval(frame, 5);
    // function frame() {
    //     if (pos == dest) {
    //     clearInterval(id);
    //     } else {
    //     pos--; 
    //     elevator[liftNo].style.top = pos + "px"; 
    //     }
    // }
    // elevator[liftNo].innerHTML = no;
    // liftDetail[liftNo].floor = no;
}


function up(no) {
    const floorDetail = liftDetail.map(a => a.maintenance ? 10000000 : a.floor);
    movement(closest(floorDetail, no), no);
}

function down(no) {
    const floorDetail = liftDetail.map(a => a.maintenance ? 10000000 : a.floor);
    movement(closest(floorDetail, no), no);
}


var closest = function(floorDetail, no) {
    if(floorDetail.includes(no) === false) {
        return floorDetail.indexOf(floorDetail.reduce(function(prev, curr) {
            return (Math.abs(curr - no) < Math.abs(prev - no) ? curr : prev);
        }));
    } else {
        return floorDetail.includes(no);
    }
}

all.innerHTML ='';
const allElevator = function() {
    for(let x=0; x<=lift-1; x++) {
        // console.log(x);
        const html = 
        `<div class="firstRow">
            <div class="first" style="height:${floorNo}00">
                <div class="elevator" id="1">
                    <span id="f1">1</span>
                </div>
            </div>
            <div class="second">
                <label class="switch">
                    <input type="checkbox" class="toggle" onclick="maintain(${x})"><span class="slider"></span>
                </label>
            </div>
        </div>`
        all.insertAdjacentHTML('beforeend', html)
        liftDetail.push({floor: 1, maintenance: false})  
    }
    
    all.insertAdjacentHTML('beforeend', `<div class="number"></div>`)  
    
    let number = document.getElementsByClassName('number')[0];
    number.innerHTML = '';

    for(let i=1; i<=floorNo; i++) {
        // console.log(i);
        let floorHTML; 
        if(i === 1) {
            floorHTML = 
            `<div class="one">
                <div class="floor"><label>${i}</label></div>
                <button onclick="up(${i})"><img src="image/up.png"></button>
            </div>`;
        } else if(i === floorNo) {
            floorHTML =  
            `<div class="one">
                <div class="floor"><label>${i}</label></div>
                <button onclick="down(${i})"><img src="image/down.png"></button>
            </div>`;
        } else {
            floorHTML = 
            `<div class="one">
                <div class="floor"><label>${i}</label></div>
                <button onclick="up(${i})"><img src="image/up.png"></button>
                <button onclick="down(${i})"><img src="image/down.png"></button>
            </div>`;
        }
    
        number.insertAdjacentHTML('afterbegin', floorHTML);
    }

    number.insertAdjacentHTML('beforeend', `<div class="word">Maintenance</div>`);
}


const moving = function() {
    allElevator();
    liftDetail.forEach((x, liftNumber) => {
        movement(liftNumber, x.floor)
    });
}

moving();