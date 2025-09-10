import "./Home.css";
import { Checkbox } from "@/components/ui/checkbox";
import { FaPen, FaTrashAlt } from "react-icons/fa";
import type { ITodo } from "@/types/types";
import { toast } from "sonner";
import { FaXmark } from "react-icons/fa6";
import { CiPaperplane } from "react-icons/ci";
import { useEffect, useState } from "react";
function Home() {
  const [todoText, setTodoText] = useState<string>("");
  const [todos, setTodos] = useState<ITodo[] | null>(
    localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos")!)
      : []
  );
  const [editingId, setEditingId] = useState<number | null>(null);
  //add todo function
  const addTodo = (todoText: string, todos: ITodo[]) => {
    const newTodo: ITodo = {
      id: Date.now(),
      title: todoText,
      complated: false,
    };

    setTodos([...todos, newTodo]);
    setTodoText("");
    toast.success("Todo added");
  };

  // delete todo function
  const deleteTodo = (todo: ITodo, todos: ITodo[]) => {
    const filteredTodos = todos?.filter((t) => t.id !== todo.id);
    toast.success("Todo deleted");
    setTodos(filteredTodos);
  };
  // edit todo function

  const editTodo = (id: number) => {
    const todoToEdit = todos?.find((t) => t.id === id);
    if (todoToEdit && todoText.trim() !== "") {
      todoToEdit.title = todoText;
      setEditingId(null);
      setTodoText("");
      localStorage.setItem("todos", JSON.stringify(todos));
    } else {
      toast.error("Todo cannot be empty");
    }
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <main>
      <section>
        <div className="container">
          <h1 className="mainTitle">Todos</h1>
          <div className="todos">
            {todos &&
              todos?.map((todo) => {
                return (
                  <div key={todo.id} className="todo">
                    <Checkbox
                      onClick={() => {
                        const updatedTodos = todos.map((t) =>
                          t.id === todo.id
                            ? { ...t, complated: !t.complated }
                            : t
                        );
                        setTodos(updatedTodos);
                      }}
                      checked={todo?.complated}
                    />

                    <input
                      className={
                        todo?.complated
                          ? "todoInput line-through text-gray-500"
                          : "todoInput"
                      }
                      type="text"
                      value={todo?.title}
                      disabled
                    />
                    <button
                      onClick={() => {
                        deleteTodo(todo, todos!);
                      }}
                      className="deleteBtn"
                    >
                      <FaTrashAlt />
                    </button>
                    <button
                      onClick={() => {
                        if (!editingId) {
                          setEditingId(todo.id);
                          setTodoText(todo.title);
                        } else {
                          setEditingId(null);
                          setTodoText("");
                        }
                      }}
                      className="editBtn"
                    >
                      {editingId === todo.id ? (
                        <FaXmark color="red" size={24} />
                      ) : (
                        <FaPen />
                      )}
                    </button>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
      <section className="addTodo">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (editingId) {
              editTodo(editingId);
            } else if (todoText.trim() !== "" && editingId === null) {
              setTodoText("");
              addTodo(todoText.trim(), todos!);
            } else {
              toast.error("Please enter a todo");
            }
          }}
          action="#"
        >
          <input
            value={todoText}
            onChange={(e) => {
              setTodoText(e.target.value);
            }}
            type="text"
            placeholder="Type to do"
          />
          <button>
            <CiPaperplane />
          </button>
        </form>
      </section>
    </main>
  );
}

export default Home;
