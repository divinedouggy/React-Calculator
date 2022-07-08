import { useState } from "react"





function Multiplication(props) {

    const [result, setResult] = useState(0)
    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)

    let num3 = num1 * num2


    



    function multiplyNumbers(event) {

        event.preventDefault()
       setResult(num3)

       
    }


    return (
        <div className="container">

            <h1>Multiply with React!</h1>

            

            <form className="multiply">

                <input type="text" value={num1} onChange={event => setNum1(Number(event.target.value))}  name="value1" />

                <span>x</span>

                <input type="text" value={num2} onChange={event => setNum2(Number(event.target.value))} name="value2" />

               

                <span>=</span>
                <h3>{result}</h3>
                <button onClick={multiplyNumbers}>Calculate</button>

                

            </form>

        </div>
    )
}

export default Multiplication