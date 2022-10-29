
import { useState } from 'react'

const orders = [100, 200, 300]
function App() {
  
  const [counter, setCounter] = useState(() => {
    //chỉ chạy 1 lần
    const total = orders.reduce((total, cur) => total + cur)
    return total;
  })

  const handleIncrease = () => {
    //counter chỉ tằng lên 1 nếu gọi 3 lần vì counter chưa update và chỉ render 1 lần
    // setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1)

    //dùng callback để xử lý, render 1 lần nhưng do dùng callback nên counter được update
    setCounter(preState => {
      
      //logic

      return preState + 1
    })
    // setCounter(preState => preState + 1)
    // setCounter(preState => preState + 1)
  }

  return (
    <div className="App" style={{padding: 20}}>
      <h1>{counter}</h1>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  );
}

export default App;
