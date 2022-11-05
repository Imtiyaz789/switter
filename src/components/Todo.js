import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Todo = ({ id }) => {

    const [data, setData] = useState()
    useEffect(() => {
        fetchApi()
    }, [])
    const fetchApi = async () => {
        try {
            const data = await axios(`https://jsonplaceholder.typicode.com/users/${id}/todos`)
            const res = data.data;
            console.log(res)
            setData(res)
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <div>
            {data.map((data) => {
                return (<>

                </>)
            })}
        </div>
    )
}

export default Todo