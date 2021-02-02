// NOTE: The section of code below changes the style of categories slider when clicked 

var x = document.querySelectorAll(".categItem");
for (let i = 0; i < x.length; i++) {
    x[i].addEventListener('click', styleCategItem)
}


function styleCategItem(event) {
    // let id = event.currentTarget.dataset.id;
    // let matches = document.querySelectorAll('[data-id = "" + id =""]')
    // if (matches) {
    //     matches.forEach(match => match.classList.toggle("styleCategItem"));
    // }
    event.currentTarget.classList.toggle("styleCategItem")
}

/* Function To Add a class on a button which is clicked and remove the same class from other buttons   */

var tabBtn = document.querySelectorAll(".tab")
    // tabBtn.forEach(toggleClass)

// function toggleClass(item) {
//     item.addEventListener("click", addRemoveClass)
// }

// function addRemoveClass(event) {
//     tabBtn.forEach(removeClass)

//     function removeClass(item) {
//         item.classList.remove("activ-tab")
//     }
//     event.target.classList.add("activ-tab")
//     console.log("you pressed tab button")
// }
// The above function can also be written in short Format as 

// tabBtn.forEach(function toggleClass(item) {
//     item.addEventListener("click", function addRemoveClass(e) {
//         tabBtn.forEach(function removeClass(item) {
//             item.classList.remove("activ-tab")
//         })
//         e.target.classList.add("activ-tab")
//     })
// })


//And this function can also written in this way too 
tabBtn.forEach(function(item) {
    item.addEventListener("click", (event) => {
        tabBtn.forEach(function(item) {
            item.classList.remove("activ-tab")
        })
        event.target.classList.add("activ-tab")
    })
})



// Block of code which changes the color of post-footer-like button

// var heart = document.querySelectorAll(".far");
// heart.forEach(function toggleClass(item) {
//         item.addEventListener("click", function opaqueLikeButton(event) {
//             event.target.classList.toggle("fas")
//         })
//     })
var likeBtn = document.querySelectorAll(".like");
likeBtn.forEach(function toggleClass(item) {
    item.addEventListener("click", function(event) {
        // likeBtn.forEach(function checkChildClass(element) {
        //         element = event.target.classList.find("far")
        //     }
        console.log(event);
        var el = event.currentTarget.querySelector('.far')
        el.classList.toggle('fas')


    })

})