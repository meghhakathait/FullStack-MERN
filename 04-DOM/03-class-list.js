let heading = document.getElementById("heading")

heading.addEventListener("click", function () {
    // heading.textContent= "you have clicked the heading"
    // heading.style.backgroundColor = "blue"
    // heading.style.color = "yellow"

    heading.classList.toggle("style1")
    heading.classList.toggle("style2")
    //toggle property - jo style lagi hue hai usko remove kr degi nd agr nhi lagi to laga degi usko
})

// console.log(heading.classList.remove("style1"))
// heading.classList.add("style2")