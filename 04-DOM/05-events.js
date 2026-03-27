// // let heading = document.getElementById("heading");


// // heading.addEventListener('mousemove', function(){
// //     heading.style.color = "red"
// // })

// // //  mouse events - click, dblclick, mouseover, mouseout, mouseenter, mouseleave, mousedown , mouseup, mousemove. these work on almost every element.

// // //  keyboard events - keydown, keyup, keypress. these work on inputs, textareas , basically in form elements.


// // input.addEventListener('submit', function(e) {
   
// //     if(e.key === "Enter"){
// //         alert("You pressed Enter key")
// //     }
// // })


// // //  form events - focus, blur, change, submit 


// // input.addEventListener('focus', function(){
// //     input.style.backgroundColor = "lightblue"
// // })

// // input.addEventListener('change', function(){
// //     console.log(input.value)
// // })



// // //  window events - load, resize, scroll, unload

// // window.addEventListener('resize', function(){
// //     document.body.style.backgroundColor = "lightgray"
// // }
// // )


// // function msg (){
// //     alert("This is an alert message")
// // }



// let input = document.getElementById("input");


// function setVal(num){
//     input.value += num
// }


let btn = document.getElementById("btn");

btn.addEventListener('click', function(){
    console.log("Button was clicked")
    let heading = document.createElement("h2");
    heading.textContent = "This is dynamically created heading."
   let para =  document.createElement("p")
   para.textContent = "This is dynamically created paragraph."
   document.body.append(heading, para)
  
})