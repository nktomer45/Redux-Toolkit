import AddTodo from "./components/AddTodos";
import Todos from "./components/Todos";
function App() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h1 className="font-bold text-gray-700">Let's Make a list </h1>
          <AddTodo />
          <Todos />
        </div>
      </div>
    </>
  );
}

export default App;
