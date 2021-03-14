import React, { useState, useEffect } from 'react'

function Product() {
    const [multiple, setmultiple] = useState(0)
    const [base, setBase] = useState(0)

    const times = () => {
        setmultiple (multiple + 2)
    }

    const upBase = () => {
        setBase(base + 1)
    }

    useEffect(() => {
       const steps = setInterval(times, 1000)
        return () => {
            clearInterval(steps)
        }
    }, [multiple])

    useEffect(() => {
       const interval = setInterval(upBase, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [base])



    return (
        <div>
            <h1>Let build Multiple app with useEffect</h1>
            <h3>2 times {base}</h3>
            <h3>{multiple}</h3>
           
           
           
        </div>
    )
}

export default Product
