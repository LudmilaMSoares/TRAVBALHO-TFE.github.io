function adicionarEn1(){
   var inputTarefa = document.getElementById("inputTarefa");
   var tarefa = inputTarefa.value;
   var listaTarefas = document.getElementById("listaTarefa");
   var item = document.createElement("li");

	item.innerHTML = tarefa;
   listaTarefas.appendChild(item);
   /*inputTarefa.value = "";*/
}

function removeEn1(){
   var tirar = document.getElementById("inputTarefa").value;
   var dl = document.getElementById("listaTarefa");
   var dli = dl.getElementsByTagName("li");
   dl.removeChild(dli[tirar - 0]);
}



function adicionarEn2(){
   var inputTarefa = document.getElementById("inputTarefas");
   var tarefa = inputTarefa.value;
   var listaTarefas = document.getElementById("listaTarefas");
   var item = document.createElement("li");

	item.innerHTML = tarefa
   listaTarefas.appendChild(item)
   inputTarefa.value = ""
}

function removeEn2(){
   var tirar = document.getElementById("inputTarefas").value;
   var dl = document.getElementById("listaTarefas");
   var dli = dl.getElementsByTagName("li");
   dl.removeChild(dli[tirar - 0]);
}



function adicionarEn3(){
   var inputTarefa = document.getElementById("inputTarefinhas");
   var tarefa = inputTarefa.value;
   var listaTarefas = document.getElementById("listaTarefinhas");
   var item = document.createElement("li");

	item.innerHTML = tarefa
   listaTarefas.appendChild(item)
   inputTarefa.value = ""
}

function removeEn3(){
   var tirar = document.getElementById("inputTarefinhas").value;
   var dl = document.getElementById("listaTarefinhas");
   var dli = dl.getElementsByTagName("li");
   dl.removeChild(dli[tirar - 0]);
}



function adicionarEn4(){
   var inputTarefa = document.getElementById("inputTarefola");
   var tarefa = inputTarefa.value;
   var listaTarefas = document.getElementById("listaTarefola");
   var item = document.createElement("li");

	item.innerHTML = tarefa
   listaTarefas.appendChild(item)
   inputTarefa.value = ""
}

function removeEn4(){
   var tirar = document.getElementById("inputTarefola").value;
   var dl = document.getElementById("listaTarefola");
   var dli = dl.getElementsByTagName("li");
   dl.removeChild(dli[tirar - 0]);
}