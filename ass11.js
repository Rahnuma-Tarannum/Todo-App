 let btn=document.querySelector("button");
 let ul=document.querySelector("ul");
 let inp=document.querySelector("input");

 btn.addEventListener("click" , function(){ 
    let item = document.createElement("li");
      let checkbox = document.createElement("input");
      checkbox.type="checkbox";

       item.appendChild(checkbox);
       item.innerHTML = `<input type="checkbox" /> ${inp.value} `;   //add task text

    let delbtn = document.createElement("button");
     delbtn.innerText = "delete";
     delbtn.classList.add("delete");

    item.appendChild(delbtn);
      ul.appendChild(item);
     inp.value = "";
 });

 
//deleting the task when clicking the dlt button
ul.addEventListener("click" , function(event){ 
     if(event.target.nodeName == "BUTTON"){ 
         let listItem=event.target.parentElement;
        listItem.remove();
        
     }

     //mark task as completed when checkbox is ticked
     if(event.target.type="checkbox"){ 
        let listItem = event.target.parentElement;
        if(event.target.checked){ 
            listItem.style.textDecoration = "line-through";
        }else{ 
            listItem.style.textDecoration = "none";
        }
     }
     
 });


