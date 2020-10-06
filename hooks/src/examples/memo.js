import React, {useState, useMemo, useEffect} from 'react'

function complexCompute(num){
    console.log('complexComputed function implements')
    let i = 0
    while (i < 100000000) i++
    return num * 2
}


const App = () => {
    const [number, setNumber] = useState(42)
    const [colored, setColored] = useState(false)

    const styles = useMemo( ()=> {
        return {
            color: colored ? 'blue' : 'black'
        }
    }, [colored])

    const computed = useMemo(()=>{
        return complexCompute(number)
    }, [number])


    useEffect(()=>{
        console.log('Styles changed')
    }, [styles])


    return (
        <>
            <h1 style={styles}>Вычисляемое свойство: {computed}</h1>
            <button className={'btn btn-success'}
                    onClick={() => setNumber(prev => prev + 1)}
            >Добавить</button>

            <button className={'btn btn-danger'}
                    onClick={()=> setNumber(prev => prev - 1)}
            >Убрать</button>

            <button className={'btn btn-warning'}
                    onClick={()=> setColored(prev => !prev)}
            >Изменить</button>
        </>
    )
}

export default App
