// import Todos from "./components/todos.component";
import { useState } from "react";
import SelectOp from "./components/selectOp.component";
import { CreditCard } from "./interfaces/creditCard";

const list: CreditCard[] = [
  {
    cartao: 'amex',
  },
  {
    cartao: 'elo'
  },
  {
    cartao: 'master'
  },
  {
    cartao: 'visa'
  },
]

const App = () => {
  const [state, setState] = useState("American Express")

  return <SelectOp 
    creditCardList={list} 
    state={state}
    setState={(card) => setState(card)}
  />;
};

export default App;
