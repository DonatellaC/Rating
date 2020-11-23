const hearts = document.querySelectorAll(".heart");

for (let i = 0; i < hearts.length; i++) {
    hearts[i].heartValue = (i + 1);
    
    ["click", "mouseover", "mouseout"].forEach(function (e){
        hearts[i].addEventListener(e, showRating);
    })

}


function showRating(e) {
    let type = e.type;

    let heartValue = this.heartValue;
    console.log(heartValue);

    hearts.forEach(function(elem, ind){
        if(type === "click") {
            if(ind < heartValue){
                elem.classList.add("red");
            } else {
                elem.classList.remove("red")
            }
        }

        if(type === "mouseover") {
            if(ind < heartValue){
                elem.classList.add("over")
            } else {
                elem.classList.remove("over")
            }
        }
        
        if(type === "mouseout") {
            elem.classList.remove("over") 
        }

    })

 
    }

   