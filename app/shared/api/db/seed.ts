import { reset } from 'drizzle-seed'
import db from '~/shared/api/db'
import * as schema from '~/shared/api/db/schema'

const todos = [
  {
    text: 'Buy milk',
    isCompleted: false,
  },
  {
    text: 'Walk the dog',
    isCompleted: false,
  },
  {
    text: 'Learn React Router',
    isCompleted: true,
  },
]

export default async function seed() {
  // @ts-ignore
  await reset(db, schema)
  for (const todo of todos) {
    const [insertedTodo] = await db
      .insert(schema.todos)
      .values({
        text: todo.text,
        isCompleted: todo.isCompleted,
      })
      .returning()
    console.log(
      `Inserted todo: ${insertedTodo.text} with ID: ${insertedTodo.id}`
    )
  }
}

if (import.meta.main || process.argv[1] === import.meta.filename) {
  seed()
    .then(() => {
      console.log('Seeding complete.')
      process.exit(0)
    })
    .catch((err) => {
      console.error('Seeding failed:', err)
      process.exit(1)
    })
}
