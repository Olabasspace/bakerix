const dropDown = document.querySelector(".dropDown")
const dropDownContent = document.querySelector(".dropDownContent")

document.querySelector("dropDown").addEventListener("mouseover", () => {
    // alert("working");
    document.querySelector(".dropDownContent").style.display = "block"
})

// var myIndex = 0;


// function carousel() {
//   var i;
//   var x = document.getElementsByClassName("infopart");
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";  
//   }
//   myIndex++;
//   if (myIndex > x.length) {myIndex = 1}    
//   x[myIndex-1].style.display = "block";  
//   setTimeout(carousel, 2000); // Change image every 2 seconds
// }

// carousel();
