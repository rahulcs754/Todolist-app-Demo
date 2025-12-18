import AddTodo from "@/components/add-todo";
import Navbar from "@/components/navbar";
import { Todos } from "@/components/todos";

function Page() {
  return (
    <main>
      <h1>TODO  NEXT + TYPESCRIPT</h1>
      <Navbar/>
      <AddTodo/> 
      <Todos/>
    </main>
  );
}

export default Page;