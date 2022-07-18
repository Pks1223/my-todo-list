const add = document.getElementById("btn-add");
add.addEventListener("click", a => {
 let write = document.querySelector("#inputfield input").value;
 if (write.length == "") {
  alert("You not enter any task...!");
 };
 item(write);
});

function item(task){
 let number = Math.floor(Math.random());
 let id = "task-" + number;
 let html = '<div id="'+ id +'" class="content"><p>' + task + '</p><button id="delete" onclick="deleteitem('+ number +')">Delete</button></div>';

 document.querySelector("#listid").innerHTML += html;

 document.querySelector("#inputfield input").value = "";
}

function deleteitem(number){
 let id = "task-" + number;
 document.getElementById(id).remove();
}
