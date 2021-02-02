var heart = document.querySelectorAll(".far.fa-heart");

heart.forEach(function toggleClass(item) {
    item.addEventListener("click", function addRemoveLikedClass(event) {
        event.target.classList.toggle("fas")
            // if (event.target.classList.contains("fas")) {
            //     event.target.classList.remove("fas")
            //     event.target.classList.add("far")
            // } else {
            //     event.target.classList.remove("far")
            //     event.target.classList.add("fas")

        // }
    })
})