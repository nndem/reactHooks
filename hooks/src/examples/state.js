/*
* useState:
*       - Предназначен для взаимодействия со state
*
*                   Особенности:
*
*       - Хук работает асинхронно, поэтому в setCounter передают callback в случае
*         с несколькими действиями с одним и тем же состоянием.
*         (грубо говоря: чтобы каждое действие выполнилось с учетом предыдущего)
*
*
*
*       - Если в качестве начального состояния используется не значение, а результат
*         работы функции, то используют callback.
*         (грубо говоря: чтобы функция вычислялась ровно один раз, а не постоянно при перерендеринге)
*
*
*       - Если в начальном состоянии находится обьект, то при setState не забывай вначале распаковывать
*         старый объект
*
*/


import React, {useState} from 'react'

const computeInitialCounter = () =>{
    console.log('Some calculations...')
    return Math.trunc(Math.random() * 20)
}




const App = () => {

    // К примеру 2
    //const [counter, setCounter] = useState(computeInitialCounter())
    const [counter, setCounter] = useState(() => computeInitialCounter())
    // END к примеру 2


    // К примеру 3
    const [state, setState] = useState({
        title: 'Счетчик',
        date: Date.now()
    })


    // К примеру 1
    const increment = ()=>{
        /*setCounter(counter + 1)
        setCounter(counter + 1)*/
        setCounter(prev => prev + 1)
        setCounter(prev => prev + 1)
    }
    const decrement = ()=>{
        setCounter(counter - 1)
    }
    //END К примеру 1



    const updateTitle =()=>{
        setState(prev => {
            return {
                ...prev,
                title: 'Новое название'
            }
        })
    }

    return (
        <div>
            <h1>Счетчик:{counter}</h1>
            <button onClick={increment} className='btn btn-success'>Добавить</button>
            <button onClick={decrement} className='btn btn-danger'>Убрать</button>
            <button onClick={()=>updateTitle()} className='btn btn-default'>Изменить название</button>

            <pre>{JSON.stringify(state, null, 2)}</pre>
        </div>
    )
}

export default App