const theColors = document.querySelectorAll(".theColor")
const sliderItems = document.querySelector(".slider-items")
let sliderItem = document.querySelectorAll(".slider-item")
const valueOfTranslate = sliderItem[0].offsetWidth
const shoeses = document.querySelectorAll(".shoeses")
const sizes = document.querySelectorAll(".size")
let updatedActive = document.querySelector(".size.active")
let theClass = "active-0";
   
        
 

for(let i = 0 ; i < theColors.length;i++){
    theColors[i].onclick = function(){
        
            creatingTheDiv(this)
            changingShoesColor(this)
            changingContentBackgroundColor(this)
            theColors.forEach(color => color.classList.remove("active"))

            this.classList.add("active")
        

        
        
    }
    
}
sizes.forEach(size => {
    size.onclick = function(){
        sizes.forEach(size => size.classList.remove("active"))
        this.classList.add("active")
        this.classList.add(theClass)
        const activeSize = document.querySelector(".size.active")
        updatedActive = activeSize
        return updatedActive

    }
})

 function  creatingTheDiv(color){
    // if(color.classList.includes("active")) return
    if(color.classList.contains("active")) return;
    const div = document.createElement("div")
    
        div.classList.add("slider-item")
        div.classList.add("absolute")
    if(color.dataset.color == 1) div.style.background = "linear-gradient(45deg, #d62926, #ee625f)"
    
    else if(color.dataset.color == 2) div.style.background = "linear-gradient(45deg, #11998e, #1ce669)"
    
    else if(color.dataset.color == 3) div.style.background = "linear-gradient(45deg, #fc4a1a, #f7b733)"
   
    else if(color.dataset.color == 4) div.style.background = "linear-gradient(45deg, #111, #666)"
    
    else if(color.dataset.color == 0) div.style.background = "linear-gradient(45deg, #0136af, #22abfa)"
    
     sliderItems.appendChild(div)
     
     
    
    
    setTimeout(() => {
         movingTheDiv()
    },300)
}
function changingShoesColor(color){
    
    shoeses.forEach(shoes => {
        shoes.classList.remove("active")
        if(color.dataset.color == shoes.dataset.color){
            shoes.classList.add("active")
        }
    })
    
}

const newItem = document.querySelector(".new")
const addToCard = document.querySelector(".addToCard")

function changingContentBackgroundColor(color){
   
    
    let loop = sizes.forEach(size => {
        size.classList.remove("active-0")
        size.classList.remove("active-1")
        size.classList.remove("active-2")
        size.classList.remove("active-3")
        size.classList.remove("active-4")
    })

    if(color.dataset.color == 1) {
            loop
            
            updatedActive.classList.add("active-1")

            theClass = "active-1"
        newItem.style.background = "#f84848"
        addToCard.style.background = "#f84848"

    }
    
    else if(color.dataset.color == 2) {
        loop
        updatedActive.classList.add("active-2")
        theClass = "active-2"
        
        newItem.style.background = "#29b864"
        addToCard.style.background = "#29b864"
    }
    
    else if(color.dataset.color == 3) {
        loop
        updatedActive.classList.add("active-3")
        theClass = "active-3"

        newItem.style.background = "#ff5521"
        addToCard.style.background = "#ff5521"
    }
   
    else if(color.dataset.color == 4) {
        loop
        updatedActive.classList.add("active-4")

        theClass = "active-4"
        
        newItem.style.background = "#444"
        addToCard.style.background = "#444"
    }
    
    else if(color.dataset.color == 0) {
        loop
        updatedActive.classList.add("active-0")
        theClass = "active-0"

        newItem.style.background = "#2175f5"
        addToCard.style.background = "#2175f5"
    }
}


function movingTheDiv(){
    const Absolute = document.querySelector(".absolute")
    const theDives = document.querySelectorAll(".theSecondCall")
    
    
    
    Absolute.classList.remove("absolute")
    Absolute.classList.add("theSecondCall")
    setTimeout( () => {
        removingTheFirstDiv(theDives)
    },800)
}
function removingTheFirstDiv(theDives){
    console.log(theDives);
    if(theDives.length > 2){
        theDives[0].remove()
    }
}




