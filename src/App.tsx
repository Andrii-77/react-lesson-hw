import './App.css'
import {useFetch} from "./hooks/useFetch.tsx";
import {IUser} from "./models/IUser.ts";
import {allUsers} from "./constants/urls.ts";

function App() {
  const users = useFetch<IUser[]>(allUsers, []);
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
