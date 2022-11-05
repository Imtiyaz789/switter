import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
const Gallery = () => {
    const [data, setData] = useState()
    const { id } = useParams()
    // console.log(id)
    useEffect(() => {
        fetchApi()
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
        <div className='container-fluid d-flex flex-wrap justify-content-evenly p-5'>
            {data && data.map((data, id) => {
                return (
                    <>
                        <div className='row'>
                            <div className='col' key={id}>
                                <div className="card  m-3 shadow p-3  bg-body rounded gallery_card"  >
                                    {/* <img src="." key={id} className="card-img-top" alt="..." /> */}
                                    <div className="card-body">
                                        <img src={data.thumbnailUrl} key={id} className="card-img-top" alt="..." />
                                        <h5 className="card-title">{data.title}</h5>

                                        {/* <h6 className="card-title">{data.username}</h6> */}
                                    </div>

                                    <div className="card-body">
                                        <Link to={data.url}>Click</Link>
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