import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'


const Todo = () => {

    const [data, setData] = useState()
    // const [isZoom, setIsZoom] = useState(false)
    const { id } = useParams()


    // console.log(id)
    useEffect(() => {
        fetchApi()
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
        <div className='container-fluid d-flex flex-column flex-wrap align-content-around p-5'>

            <div className=''>
                <table className='table table-striped '>
                    <thead className='table-info'>
                        <tr>
                            <th scope='col'>Title</th>
                            <th scope='col'>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data && data.map((data) => {
                            return (
                                <>
                                    <tr className='table-light border ' >
                                        <td >{data.title}</td>
                                        <td >{data.completed ? <h6>Completed</h6> : <h6>Pending</h6>}</td>
                                    </tr>
                                </>
                            )
                        })}
                    </tbody>
                </table>
            </div>


        </div>
    )
}

export default Todo