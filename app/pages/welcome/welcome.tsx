import { useEffect, useState } from 'react'
import db from '~/shared/api/db'
import { todos } from '~/shared/api/db/schema'
import { desc, eq } from 'drizzle-orm'
import { Trash2, CheckCircle2, Circle, Plus } from 'lucide-react'

import logoDark from './logo-dark.svg'
import logoLight from './logo-light.svg'

type Todo = typeof todos.$inferSelect

export function Welcome() {
  const [todoList, setTodoList] = useState<Todo[]>([])
  const [inputValue, setInputValue] = useState('')

  const loadTodos = async () => {
    try {
      const result = await db
        .select()
        .from(todos)
        .orderBy(desc(todos.createdAt))
      setTodoList(result)
    } catch (error) {
      console.error('Failed to load todos:', error)
    }
  }

  useEffect(() => {
    loadTodos()
  }, [])

  const addTodo = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputValue.trim()) return

    try {
      const [newTodo] = await db
        .insert(todos)
        .values({
          text: inputValue,
        })
        .returning()

      setTodoList([newTodo, ...todoList])
      setInputValue('')
    } catch (error) {
      console.error('Failed to add todo:', error)
    }
  }

  const toggleTodo = async (todo: Todo) => {
    try {
      const [updatedTodo] = await db
        .update(todos)
        .set({ isCompleted: !todo.isCompleted })
        .where(eq(todos.id, todo.id))
        .returning()

      setTodoList(
        todoList.map((t) => (t.id === updatedTodo.id ? updatedTodo : t))
      )
    } catch (error) {
      console.error('Failed to toggle todo:', error)
    }
  }

  const deleteTodo = async (id: number) => {
    try {
      await db.delete(todos).where(eq(todos.id, id))
      setTodoList(todoList.filter((t) => t.id !== id))
    } catch (error) {
      console.error('Failed to delete todo:', error)
    }
  }

  return (
    <main className="flex items-center justify-center min-h-screen bg-white dark:bg-gray-950 p-4">
      <div className="flex-1 flex flex-col items-center gap-8 max-w-md w-full">
        <header className="flex flex-col items-center gap-6">
          <div className="w-64 max-w-full">
            <img
              src={logoLight}
              alt="React Router"
              className="block w-full dark:hidden"
            />
            <img
              src={logoDark}
              alt="React Router"
              className="hidden w-full dark:block"
            />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Todo List
          </h1>
        </header>

        <div className="w-full space-y-6">
          <form onSubmit={addTodo} className="relative">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="What needs to be done?"
              className="w-full px-4 py-3 pr-12 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
            <button
              type="submit"
              disabled={!inputValue.trim()}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <Plus size={20} />
            </button>
          </form>

          <div className="space-y-3">
            {todoList.length === 0 ? (
              <p className="text-center text-gray-500 py-8">
                No todos yet. Add one above!
              </p>
            ) : (
              <ul className="space-y-3">
                {todoList.map((todo) => (
                  <li
                    key={todo.id}
                    className="group flex items-center gap-3 p-3 bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm transition-all hover:shadow-md hover:border-blue-100 dark:hover:border-blue-900/50"
                  >
                    <button
                      onClick={() => toggleTodo(todo)}
                      className={`flex-shrink-0 transition-colors ${todo.isCompleted
                          ? 'text-blue-500'
                          : 'text-gray-400 hover:text-blue-500'
                        }`}
                    >
                      {todo.isCompleted ? (
                        <CheckCircle2 size={24} />
                      ) : (
                        <Circle size={24} />
                      )}
                    </button>

                    <span
                      className={`flex-1 text-sm font-medium transition-all ${todo.isCompleted
                          ? 'text-gray-400 line-through'
                          : 'text-gray-700 dark:text-gray-200'
                        }`}
                    >
                      {todo.text}
                    </span>

                    <button
                      onClick={() => deleteTodo(todo.id)}
                      className="opacity-0 group-hover:opacity-100 p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-all"
                    >
                      <Trash2 size={18} />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
