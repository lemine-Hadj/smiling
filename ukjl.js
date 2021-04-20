

document.addEventListener("DOMContentLoaded",function(){

    document.querySelector("form").onsubmit = function(){
    
    var valle = document.querySelector("#task").value;
    var li = document.createElement("li");
    li.innerHTML = valle;
    document.querySelector("#sel").appendChild(li);
    document.querySelector("#task").value = "";
    
    return false;
    
    }
    })
    ;