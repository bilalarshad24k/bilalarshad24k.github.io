// NOTE: The section of code below changes the style of categories slider when clicked 

var x = document.querySelectorAll(".categItem");
for (let i = 0; i < x.length; i++) {
    x[i].addEventListener('click', styleCategItem)
}


function styleCategItem(event) {
    // if (event.currentTarget.classList.contains('styleCategItem')) {
    //     event.currentTarget.classList.remove('styleCategItem')
    // } else {
    //     event.currentTarget.classList.add('styleCategItem')
    // }

    event.currentTarget.classList.toggle("styleCategItem")
}


//This  Section of code below somehow designs the Tab and defines how the style must change when user click on each tab 

var y = document.querySelectorAll('.tab');
for (let i = 0; i < y.length; i++) {
    y[i].addEventListener('click', assignActivTabClass)
}

function assignActivTabClass(event) {

    if (event.currentTarget.classList.contains("in-activ-tab")) {
        event.currentTarget.classList.add("activ-tab")
    } else {

    }
}