import { useEffect, useState } from "react"
import Header from "./components/header"
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todo, settodo] = useState("")
  const [todos,settodos] = useState([])
  const [showFinished,setshowFinished] = useState(true)

  useEffect(() => {
    let todoString=localStorage.getItem("todos")
    if(todoString){
      let todos=JSON.parse(localStorage.getItem("todos"))
      settodos(todos)
    }
    }, [])
  
  const savetoLS=()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  }

  const handleChange=(e)=>{
    settodo(e.target.value)
  }
  const handleAdd=()=>{
    settodos([...todos,{id:uuidv4(),todo,iscompleted:false}])
    settodo("")
    savetoLS()
  }
  const handleCheckbox=(e)=>{
    let id=e.target.name;
    let index=todos.findIndex(item=>{
      return item.id===id;
    })
    let newTodos=[...todos];
    newTodos[index].iscompleted=!newTodos[index].iscompleted;
    settodos(newTodos)
    savetoLS()
  }
  const handleEdit=(id)=>{
    let t=todos.filter((i)=>i.id===id)
    console.log(t)
    settodo(t[0].todo)
    let newTodos=todos.filter(item=>{
      return item.id!=id
    });
    settodos(newTodos)
    savetoLS()
    
  }
  const handleDelete=(id)=>{
    let newTodos=todos.filter(item=>{
      return item.id!=id
    });
    settodos(newTodos)
    savetoLS()
  }
  const toggleFinished=()=>{
    setshowFinished(!showFinished)
  }
  return (
    <>
    <Header/>
    <div className="md:container bg-violet-100 h-[80vh] md:w-3/4 m-auto my-7 rounded-xl p-2">
      <div className="Addtodo ">
        <h1 className="font-bold mx-5 mt-5 ">Add Tasks</h1>
        <input onChange={handleChange} value={todo}
        type="text" className="outline-2 outline-black w-1/4 mx-5 rounded-l" />
        <button onClick={handleAdd}
        disabled={todo.length<=3}
        className="bg-violet-900 text-white px-3 py-1 rounded-lg disabled:bg-gray-500 hover:bg-violet-700 transition-all duration-300 ">Save</button>
      </div>
      <input onChange={toggleFinished} className="mx-5" type="checkbox" checked={showFinished}/> Show finished
      <div className="font-bold mx-5">Your Todos</div>
      <div className="Yourtodos">
        {todos.length===0 && <div className="mx-7 my-2">No Todos added yet</div>}
        {todos.map(item=>{
        return (showFinished || !item.iscompleted) && <div key={item.id} className="Todo flex gap-2 mx-5 my-2 justify-between md:w-1/2">
          <div className="flex gap-2">
            <input name={item.id} onChange={handleCheckbox} type="checkbox" checked={item.iscompleted} />
            
            <div className={item.iscompleted?"line-through":""}>{item.todo}</div>
          </div>
        <div className="Buttons flex gap-2 h-full">
          <button onClick={()=>{handleEdit(item.id)}}
          className="bg-violet-900 text-white px-3 py-1 rounded-lg hover:bg-violet-700 transition-all duration-300 ">Edit</button>
          <button onClick={()=>{handleDelete(item.id)}}
          className="bg-violet-900 text-white px-3 py-1 rounded-lg hover:bg-violet-700 transition-all duration-300 ">Delete</button>
        </div>
        </div>
        })}
      </div>
    </div>
    </>
  )
}

export default App
