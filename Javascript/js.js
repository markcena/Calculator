var forms = document.querySelectorAll("button");

for(var i=0; i<forms.length; i++){
    forms[i].onclick = function (e){
        var input = document.querySelector(".answerstyle")
        var inputValue = input.innerHTML;
        var btnValue = this.innerHTML;
     
        if(btnValue == "AC"){
            input.innerHTML= "";

        }
        else if(btnValue == "="){
            var answer = inputValue;
            if(answer){
                input.innerHTML = eval(answer);
            }

        }
        else if(btnValue == "Del"){
            input.innerHTML= input.innerHTML.substring(0,input.innerHTML.length-1);
               }
       
        else {
            input.innerHTML += btnValue;
        }
      
         
    }
}

