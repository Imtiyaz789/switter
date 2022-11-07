import React, { useEffect, useState } from 'react'
import axios from 'axios'
import img from '../img.jpg'
// import Todo from './Todo'
import { Link } from 'react-router-dom'

const Card = () => {
    const [data, setData] = useState()
    useEffect(() => {
        fetchApi()
        // link()
    }, [data])
    const fetchApi = async () => {
        try {
            const data = await axios('https://jsonplaceholder.typicode.com/users/')
            const res = data.data;
            // console.log(res)
            setData(res)
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <div className='container-fluid d-flex flex-wrap justify-content-evenly p-5'>
            {data && data.map((data, id) => {
                return (<>
                    <div className='row'>
                        <div className='col'>
                            <div className="card m-3 shadow p-3  bg-body rounded" >
                                <img src={`https://picsum.photos/200/300/?blur=${id || img}`} key={id} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{data.name}</h5>
                                    <h6 className="card-title">{data.username}</h6>
                                </div>

                                <div className="card-body d-flex justify-content-evenly">
                                    <button className='btn btn-info' ><Link to={`/${data.id}/albums`}>Album</Link></button>
                                    <button className='btn btn-info' ><Link to={`/${data.id}/todos`}>Todos</Link></button>
                                    {/* <a href="1" className="card-link">Post</a> */}
                                    {/* <a href="1" className="card-link"><Todo id={data.id} /></a> */}
                                    {/* <a href="1" className="card-link">Album</a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </>)
            })}

        </div>
    )
}

export default Card