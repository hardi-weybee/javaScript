'use strict';

const elevator = document.getElementsByClassName('elevator');
const toggle = document.getElementsByClassName('toggle');
const buttons = document.getElementsByTagName('button');
const container = document.querySelector('.container');

console.log(elevator);
console.log(toggle);

let lift = 3;
let floorNo = 5;
let liftDetail = [
    {floor: 1, maintenance: false},
    {floor: 1, maintenance: false},
    {floor: 1, maintenance: false}
]

// container.innerHTML.style.height = `${floorNo.length}00`

function maintain(i) {
    if(toggle[i].checked) {
        liftDetail[i].maintenance = true;
        liftDetail[i].floor = 1;
        movement(i, 1);
        elevator[i].style.border = '2px solid red';
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
    // elevator[liftNo].style.top = `${floorNo - no}00`;
    // elevator[liftNo].innerHTML = no;
    // liftDetail[liftNo].floor = no;

    let id = null;
    // const elem = document.getElementsByClassName("elevator");   
    let pos = `${floorNo - liftDetail[liftNo].floor}00`;
    const dest = `${floorNo - no}00`
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
        if (pos == dest) {
        clearInterval(id);
        } else {
        pos--; 
        elevator[liftNo].style.top = pos + "px"; 
        }
    }
    elevator[liftNo].innerHTML = no;
    liftDetail[liftNo].floor = no;

}


var closest = function(floorDetail, no) {
    if(floorDetail.indexOf(no) === -1) {
        return floorDetail.indexOf(floorDetail.reduce(function(prev, curr) {
            return (Math.abs(curr - no) < Math.abs(prev - no) ? curr : prev);
        }));
    } else {
        return floorDetail.indexOf(no);
    }
}


function up(no) {
    const floorDetail = liftDetail.map(a => a.maintenance ? 100000 : a.floor);
    movement(closest(floorDetail, no), no);
}

function down(no) {
    const floorDetail = liftDetail.map(a => a.maintenance ? 100000 : a.floor);
    movement(closest(floorDetail, no), no);
}

