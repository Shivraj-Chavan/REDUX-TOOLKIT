import React from 'react'
import { useSelector } from 'react-redux'
export default function Card() {


  const finaldata=useSelector((state)=>state.mycart)

  return (
    <div>

<table className='table table-dark table-bordered'>
{
  finaldata.map((value,index)=>{
    return(
      <tr>
        <td>{value.id}</td>
        <td><img src={value.image} className='img-fluid' style={{height:"100px",width:"100px"}}/></td>
        <td>{value.title}</td>
        <td><button className='btn btn-danger'>Remove</button></td>
      </tr>
    )
  })
}
</table>

    </div>
  )
}
