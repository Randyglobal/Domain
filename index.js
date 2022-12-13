// alert("Hello This is a clone");

let iconDiv = document.getElementById("iconDrop");
let dropDown = document.getElementById("dropDwon");
dropDown.style.display = "none";

iconDiv.addEventListener('click', function () {
    if (dropDown.style.display == "none") {
        dropDown.style.display = "block"
        // dropDown.style.marginTop = "60px"

    } else {
        dropDown.style.display = "none"

    }

    // iconDiv.addEventListener('mouseover', function(){
    //     if(dropDown.style.display == "none"){
    //         dropDown.style.display = "block"
    //         dropDown.style.marginTop = "40px"
    //     }else{
    //         dropDown.style.display = "none"

    //     }
    //     iconDiv.addEventListener('mouseout', function(){
    //         dropDown.style.display = "none"
    //     })
    // })
});
