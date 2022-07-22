'use strict';


let elevator = document.getElementsByClassName('elevator');
const toggle = document.getElementsByClassName('toggle');
const buttons = document.getElementsByTagName('button');
const all = document.getElementsByClassName('all')[0];
const container = document.querySelector('.container');

console.log(elevator);
console.log(toggle);


let lifts = prompt("enter the number of lifts u want", '3');
let lift = Number(lifts) ? Number(lifts) : 3;
let floors = Number(prompt("enter the number of floors u want", '5'));
let floorNo = Number(floors) ? Number(floors) : 5;
// let lift = 3;
// let floorNo = 5;
let liftDetail = [];


function maintain(i) {
    if(toggle[i].checked) {
        liftDetail[i].maintenance = true;
        movement(i, 1);
        elevator[i].style.border = '2px solid red';
        alert(`whops !! Elevator ${i + 1} is under maintenence`);
    } else {
        liftDetail[i].maintenance = false;
        elevator[i].style.border = 'none';
        elevator[i].style.border = '2px solid black';
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

    let x = 0;
    let number = liftDetail[liftNo].floor;
    let floorheight = 100;
    let id = null;   
    let pos = `${floorNo - liftDetail[liftNo].floor}00`;
    const dest = `${floorNo - no}00`
    liftDetail[liftNo].floor = no;

    clearInterval(id);
    id = setInterval(frame, 5);
    document.getElementsByClassName('door')[liftNo].style.left = "0";
    
    
    function frame() {
        if (pos == dest) {
            clearInterval(id);
            elevator[liftNo].style.top = pos + "px"; 
            document.getElementsByClassName("floorNum")[liftNo].innerHTML = no;
            if(toggle[liftNo].checked) {
                document.getElementsByClassName('door')[liftNo].style.left = "0";
            } else {
                document.getElementsByClassName('door')[liftNo].style.left = "-100%";
            }

        } else {
            pos > dest ? pos-- : pos++;
            elevator[liftNo].style.top = pos + "px";
            
            if(x == floorheight) {
                x = 0;
                pos > dest ? number++ : number--;
            } else {
                x++;
            }
            document.getElementsByClassName("floorNum")[liftNo].innerHTML = number;
        }
    }
}


function up(no) {
    const floorDetail = liftDetail.map(a => a.maintenance ? 10000000000 : a.floor);
    movement(closest(floorDetail, no), no);
}

function down(no) {
    const floorDetail = liftDetail.map(a => a.maintenance ? 10000000000 : a.floor);
    movement(closest(floorDetail, no), no);
}


var closest = function(floorDetail, no) {
    if(floorDetail.includes(no) === false) {
        return floorDetail.indexOf(floorDetail.reduce(function(prev, curr) {
            return (Math.abs(curr - no) < Math.abs(prev - no) ? curr : prev);
        }));
    } else {
        return floorDetail.indexOf(no);
    }
}

all.innerHTML ='';
const allElevator = function() {
    for(let x=0; x<=lift-1; x++) {
        // console.log(x);
        const html = 
        `<div class="firstRow">
            <div class="first" style="height:${floorNo}00px">
                <div class="elevator" style="top:${floorNo-1}00px">
                    <div class="door active-left" id="leftDoor"></div>
                    <span class="floorNum">1</span>
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
    // document.getElementsByClassName('number')[0].innerHTML = '';

    for(let x=1; x<=floorNo; x++) {
        // console.log(x);
        let floorHTML; 
        if(x === 1) {
            floorHTML = 
            `<div class="one">
                <div class="floor"><label>${x}</label></div>
                <button onclick="up(${x})"><img src="image/up.png"></button>
            </div>`;
        } else if(x === floorNo) {
            floorHTML =  
            `<div class="one">
                <div class="floor"><label>${x}</label></div>
                <button onclick="down(${x})"><img src="image/down.png"></button>
            </div>`;
        } else {
            floorHTML = 
            `<div class="one">
                <div class="floor"><label>${x}</label></div>
                <button onclick="up(${x})"><img src="image/up.png"></button>
                <button onclick="down(${x})"><img src="image/down.png"></button>
            </div>`;
        }
        number.insertAdjacentHTML('afterbegin', floorHTML);
    }
    number.insertAdjacentHTML('beforeend', `<div class="word">Maintenance</div>`);
}

allElevator();