import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
const Gallery = () => {
    const [data, setData] = useState()
    const { id } = useParams()
    // console.log(id)
    useEffect(() => {
        fetchApi()
    }, [])
    const fetchApi = async () => {
        try {
            const data = await axios(`https://jsonplaceholder.typicode.com/albums/${id}/photos`)
            const res = data.data;
            console.log(res)
            setData(res)
        } catch (error) {
            console.log(error)
        }

    }
    return (
        <div className='container-fluid'>
            {data && data.map((data, id) => {
                return (
                    <>
                        <div className='row'>
                            <div className='col' key={id}>
                                <div className="card"  >
                                    <img src="." key={id} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{data.title}</h5>
                                        <img src={data.thumbnailUrl} key={id} className="card-img-top" alt="..." />
                                        <Link to={data.url}>Click</Link>
                                        {/* <h6 className="card-title">{data.username}</h6> */}
                                    </div>

                                    <div className="card-body">
                                        {/* <button ><Link to={`/albums/${data.id}`}>Album</Link></button> */}
                                        {/* <a href="1" className="card-link">Post</a> */}
                                        {/* <a href="1" className="card-link"><Todo id={data.id} /></a> */}
                                        {/* <a href="1" className="card-link">Album</a> */}
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

export default Gallery