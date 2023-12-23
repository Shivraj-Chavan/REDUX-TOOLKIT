import React, { useEffect, useState } from 'react'
import "./Style.css"
import { addcart } from '../Redux/TodoSlice'
import { useDispatch } from 'react-redux'
export default function MyHome() {

    const dispatch=useDispatch()
    const [data, setdata] = useState([])

    const api = async () => {
        const response = await fetch("https://fakestoreapi.com/products/")
        const result = await response.json()
        setdata(result)
    }

    useEffect(() => {
        api()
    })

    return (
        <>
            <div className='container bg-danger d-flex flex-wrap'>   
                 {
                data.map((value, index) => {
                    return (
                                <div className="col-md-4">
                                    <div className="card" style={{ width: '18rem' }}>
                                        <img src={value.image} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{value.title}</h5>
                                            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                            <p className="card-text">{value.price}</p>
                                            <a href="#" className="btn mr-2"><i className="fas fa-link" />BUY NOW</a>
                                            <button onClick={()=>{dispatch(addcart(value))}}  className="btn"><i className="fab fa-github" />ADD CART</button>
                                        </div>
                                    </div>
                                </div>
                    )
                })
            }

            </div>

        </>
    )
}

