import Header from "./components/header"
function App() {

  return (
    <>
    <Header/>
    <div className="container bg-violet-100 h-[80vh] w-3/4 m-auto my-7 rounded-xl p-2">
      <div className="Addtodo ">
        <h1 className="font-bold mx-5 mt-5 ">Add Tasks</h1>
        <input type="text" className="outline-2 outline-black w-1/4 mx-5 rounded-l" />
        <button className="bg-violet-900 text-white px-3 py-1 rounded-lg hover:bg-violet-700 transition-all duration-300 ">Submit</button>
      </div>
      <div className="font-bold mx-5">Your Todos</div>
      <div className="Yourtodos">
        <div className="Todo flex gap-2 mx-5">
        <div className="text">Here your todos will be added</div>
        <div className="Buttons flex gap-2">
          <button className="bg-violet-900 text-white px-3 py-1 rounded-lg hover:bg-violet-700 transition-all duration-300 ">Edit</button>
          <button className="bg-violet-900 text-white px-3 py-1 rounded-lg hover:bg-violet-700 transition-all duration-300 ">Delete</button>
        </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
