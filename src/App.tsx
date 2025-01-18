import './App.css'
import {useFetch} from "./hooks/useFetch.tsx";

function App() {
  const users = useFetch<{ id: number, name: string, email: string; }[]>('https://jsonplaceholder.typicode.com/users', []);
  return (
    <>
      {

        // users &&
        //   - якщо не задавати у useFetch другий аргрумент і не прописувати його в useState,
        // то потрбіно прописувати так:
        //   це перевірка users на те, що воно існує, не є нульове, якщо там щось є,
        //   то тоді можна будувати DOM структуру на основі даних, які лежать в середині.
        //   Це є другий спрощений підхід.

        users.map((user) => (
            <div key={user.id}>
              {user.id}). {user.name}: {user.email}
            </div>
        ))
      }
    </>
  )
}

export default App
