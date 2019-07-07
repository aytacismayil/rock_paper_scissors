let wins =0;
let losses = 0;
let ties =0;


document.onkeyup = function(e){

    let variants =['s','r','p']

let random_index = Math.floor(Math.random() * 3)

let comp_choise = variants[random_index]
console.log(comp_choise)

    let user_choise =e.key;

    if(comp_choise =='r' && user_choise =='p'){
        alert("you are loser")
        losses++;
    }
    else if(comp_choise =='p' && user_choise =='r'){
        alert("you are won")
        win++;
    }
    else if(comp_choise =='s' && user_choise =='p'){
        alert("you are loser")
        losses++;
    }
    else if(comp_choise =='p' && user_choise =='s'){
        alert("you are won")
        wins++;
    }
    else if(comp_choise =='r' && user_choise =='s'){
        alert("you are loser")
        losses++;
    }
    else if(comp_choise =='s' && user_choise =='r'){
        alert("you are won")
        wins++;
    }
    else if(comp_choise == user_choise){
        alert("Drow")
        ties++;
      
    }
    document.querySelector("#wins").innerHTML = wins
    document.querySelector("#losses").innerHTML = losses
    document.querySelector("#ties").innerHTML = losses


}