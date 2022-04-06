import {useState} from "react";


const CounterComponent = () => {
    const [count, setCount] = useState(0);

    const doDecrement = () => {
        let tempCount = count - 1;
        if (tempCount < 0) {
            let count=0;
        }
        else{
            setCount(tempCount);
        }
        console.log(tempCount);
    };

    const doIncrement = () => {
        let tempCount = count + 1;
        if (tempCount > 10) {
            
        }
    };

    const reAssign = (val: number) => {
        setCount(val);
        console.log("Re-Assign -> " + val);
    };

    return(
        <>
          <div>
              <br /> <br /> <br /> <br />
              <button onClick={() => doDecrement()}>-</button>
              <h1>{count}</h1>
              <button onClick={() => doIncrement()}>+</button>
              <br /><br />
              <button onClick={() => reAssign(0)}>Re-Assign</button>
              
          </div>
        </>
    );
};

export default CounterComponent;