import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { buyCandy } from '../redux'

const HooksCandyContainer = () => {
    const numOfCandy = useSelector(state => state.candy.numOfCandy)
    const dispatch=useDispatch()
  return (
    <div>
          <h2>Num of Candy - {numOfCandy}</h2>
          <button onClick={()=>dispatch(buyCandy())}>buy cake</button>
    </div>
  )
}

export default HooksCandyContainer
