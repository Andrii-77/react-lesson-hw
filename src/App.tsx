import './App.css'
import MyComponent from "./components/MyComponent.tsx";

function App() {

  return (
    <>
      <MyComponent text={'hello 1'}/>
      <MyComponent text={'hello 2'}/>
      <MyComponent text={'hello okten'}/>
      {/*{MyComponent({text: 'hello 2'})}*/}
    </>
  )
}

export default App
