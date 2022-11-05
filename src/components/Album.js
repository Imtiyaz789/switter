import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

const Album = () => {
    const [data, setData] = useState()
    const { id } = useParams()
    // console.log(id)
    useEffect(() => {
        fetchApi()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const fetchApi = async () => {
        try {
            const data = await axios(`https://jsonplaceholder.typicode.com/users/${id}/albums`)
            const res = data.data;
            console.log(res)
            setData(res)
        } catch (error) {
            console.log(error)
        }

    }
    return (
        <div className='container-fluid d-flex flex-wrap justify-content-evenly p-5'>
            {data && data.map((data, id) => {
                return (
                    <>
                        <div className='row m-2 d-flex justify-content-evenly' >
                            <div className='col'>
                                <div className="card m-3 shadow p-3  bg-body rounded" key={id} >
                                    <div className="card-body">
                                        <h5 className="card-title">{data.title}</h5>
                                        {/* <img src={data.url} key={id} className="card-img-top" alt="..." /> */}
                                        {/* <h6 className="card-title">{data.username}</h6> */}
                                    </div>

                                    <div className="card-body">
                                        <Link to={`/albums/${data.id}/photos`}>See Pics</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )
            })}
        </div>
    )
}

export default Album