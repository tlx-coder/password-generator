import './App.css';
import Header from './Components/Header/Header';
import Body from './Components/Body/Body';
import Footer from './Components/Footer/Footer';
import { useReducer, useState } from "react";

const initData = { len: 0, upCase: false, lowCase: false, num: false, sym: false };

const setDataReducer = (data, action) => {
  switch (action.type) {
    case "len":
      return { ...data, len:action.value}
    case "upCase":
      return { ...data, upCase:action.value}
    case "lowCase":
      return { ...data, lowCase:action.value}
    case "num":
      return { ...data, num:action.value}
    case "sym":
      return { ...data, sym:action.value}
    default:
      throw new Error("Unexpected action entered");
  }

}

function App() {

  // not used simple data because on every render, we are losing the data
  const [data, SetData] = useReducer(setDataReducer, initData);

  const [password, setPassword] = useState("");
  

  return (
    <div className="App">
      <div className="main-container">
        <Header password={password} />
        <Body SetData={SetData} />
        <Footer setPassword={setPassword} data={data} />
      </div>
      <div className="ejaz">
        Made by Ejaz ul Haq
      </div>
    </div>
  );
}

export default App;
