import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useTodoList = create(
  persist(
    (set) => ({
      list: [],
      add: (task) =>
        set((state) => ({
          list: [
            ...state.list,
            { id: task.id, name: task.task, completed: false },
          ],
        })),
      deleteTask: (id) =>
        set((state) => ({
          list: state.list.filter((task) => task.id !== id),
        })),
      editTask: (newTask) =>
        set((state) => ({
          list: state.list.map((task) =>
            task.id === newTask.id ? {...task, name: newTask.name} : task
          ),
        })),
      setCompleted: (id) =>
        set((state) => ({
          list: state.list.map((task) => task.id === id ? {...task, completed: !task.completed} : task),
        })),
    }),
    { name: "task-storage" }
  )
);
