window.addEventListener("load", ()=>{
    console.log(document.URL)
    if(document.URL.includes("index.html")){
        document.querySelector("#homepage").style.border = "2px solid black";
    }
    else if(document.URL.includes("menu.html")){
        document.querySelector("#menupage").style.border = "2px solid black";
        var pizza = document.querySelectorAll("div img");
        var pizzapopup = document.querySelector(".nutrition");
        var background = document.querySelector(".nutrition_background");
        pizza.forEach((e) => {
            e.addEventListener("click", ()=>{
                pizzapopup.style.display = "inline";
                background.style.display = "inline";
                pizzapopup.addEventListener("click", ()=>{
                    pizzapopup.style.display = "none";
                    background.style.display = "none";
                })
                background.addEventListener("click", ()=>{
                    pizzapopup.style.display = "none";
                    background.style.display = "none";
                })
            })
        });
    }
    else{
        document.querySelector("#aboutpage").style.cssText = `
            border: 2px solid black; width: calc(100% + 2px); text-align: center;
        `;
    }
})