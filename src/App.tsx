import './App.css';
import {LeftBranch} from "./components/LeftBranch.tsx";
import {RightBranch} from "./components/RightBranch.tsx";
import {MyContext} from "./contetx/MyContext.tsx";
import {useState} from "react";

function App() {

  const [counter, setCounter] = useState<number>(0);

  return (
      <>

        <MyContext.Provider value={{
          counterValue: counter,
          increment: (obj) => {
            setCounter(++obj);
          }
        }}>

          <LeftBranch/>
          <RightBranch/>
        </MyContext.Provider>

      </>
  );
}

export default App