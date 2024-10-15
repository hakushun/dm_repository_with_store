import { proxy } from "valtio";

export type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

const initialTodos: Todo[] = [
  { id: 1, title: "Learn React", completed: true },
  { id: 2, title: "Learn Valtio", completed: false },
  { id: 3, title: "Learn Recoil", completed: false },
];

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const state = proxy<{ todos: Todo[] }>({ todos: initialTodos });

export class TodoRepository {
  public getKey(lang: string): string {
    return `todos_${lang}`;
  }

  public async add(title: string): Promise<void> {
    await sleep(2000);
    state.todos.push({
      id: state.todos.length + 1,
      title,
      completed: false,
    });
  }

  public async getAll(): Promise<Todo[]> {
    await sleep(2000);
    return state.todos;
  }

  public async getById(id: number): Promise<Todo | undefined> {
    await sleep(2000);
    return state.todos.find((todo) => todo.id === id);
  }
}
