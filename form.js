let player = {
    name: [],
    chips: 0
}

if (!localStorage.getItem("player")) {
    localStorage.setItem("player", JSON.stringify(player))
}

let loginBtn = document.querySelector(".nameButton")

loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
  
    
    let nameEl = document.querySelector(".name")

    if(nameEl.value === ""){ 
        alert("Please fill in a name!");
    } else {
        player.name.push(nameEl.value)
        localStorage.setItem("player", JSON.stringify(player))
        window.location.replace('BlackJack.html');
    }
});