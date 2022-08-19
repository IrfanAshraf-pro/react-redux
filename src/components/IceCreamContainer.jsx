import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyIcecream } from '../redux'
const IceCreamContainer = () => {
    const numOfIceCreams = useSelector(state => state.iceCream.numOfIceCreams)
    const dispatch=useDispatch()
  return (
    <div>
          <h2>Num of IceCream - {numOfIceCreams}</h2>
          <button onClick={()=>dispatch(buyIcecream())}>buy IceCream</button>
        </div>
  )
}

export default IceCreamContainer
