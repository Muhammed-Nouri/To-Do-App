let todolistdata = []
const listTodo = document.getElementById("todo-list")

const addButton =  document.getElementById("add")
addButton.addEventListener("click", function (){

    const newText = document.getElementById("new-todo")
   
    if (newText.value === ""){return}

    const newItem = {
        description : newText.value,
        done        : false
     }
     
     todolistdata.push (newItem) 
     console.log (todolistdata)
     renderTodo ()       
     setLocal()
     newText.value = ""
     
})
function renderTodo (){
    listTodo.innerHTML = ""
    
    todolistdata.forEach((item,index) => {
        
        const li = document.createElement ("li")
        li.innerHTML = item.description
        listTodo.appendChild(li)

        const checkbox   = document.createElement ("input")
        checkbox.type    = "checkbox"
        checkbox.checked = item.done
        li.appendChild(checkbox)
        checkbox.addEventListener("change", ()=>{
            todolistdata[index].done = !todolistdata[index].done 

            renderTodo()

        } )
    
    })
}
const deletedButton = document.getElementById("deleted")
deletedButton.addEventListener("click",function(){
    todolistdata = todolistdata.filter (item=> item.done == false)
    renderTodo ()
    setLocal ()

})

const setLocal = () => {
 localStorage.setItem("todos", JSON.stringify(todolistdata))

 }
 
 const getLocal = () => {
 const data = localStorage.getItem("todos")
 todolistdata=JSON.parse(data)

 }
 getLocal()
 renderTodo()
