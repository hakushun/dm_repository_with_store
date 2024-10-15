import useSWRV from "swrv";
import { Todo, TodoRepository } from "../repository/TodoRepository";

export function useTodos() {
  const repository = new TodoRepository();
  const { data, isValidating, mutate } = useSWRV<Todo[]>(repository.getKey("ja"), repository.getAll);

  const addTodo = async (title: string) => {
    await repository.add(title);
    // FIXME: ここ
    await mutate();
  };

  return { todos: data, isLoading: isValidating, addTodo };
}
