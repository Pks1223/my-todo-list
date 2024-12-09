const add = document.getElementById("btn-add");
add.addEventListener("click", (a) => {
  let write = document.querySelector("#inputfield input").value;
  if (write.length == "") {
    alert("You not enter any task...!");
  } else {
    item(write);
  }
});


//   let number = Math.floor((Math.random()*100)+1);
let number = 1;      //  For task Id
function item(task) {
  let id = "taskId-" + number;
  let taskActionBtns =
    '<div id="' +
    id +
    '" class="content"><p>' +
    task +
    '</p><div class="actionsBtnBox"><button id="update" onclick="updateitem(' +
    number + ')">Update</button><button id="delete" onclick="deleteitem(' +
    number +
    ')">Completed</button></div></div>';

  document.querySelector("#listid").innerHTML += taskActionBtns;

  document.querySelector("#inputfield input").value = "";

  // Update task Id
  number++;
}
function updateitem(taskId){
   let id = "taskId-" + taskId;
   console.log(id);
   // console.log(document.getElementById(id));
   let idDiv = document.getElementById(id);
   let idContent = idDiv.querySelector('p');
   console.log(idContent.textContent);
}
function deleteitem(number) {
  let id = "taskId-" + number;
  document.getElementById(id).remove();
}
