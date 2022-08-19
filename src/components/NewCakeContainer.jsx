import Reac,{useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { buyCake } from '../redux'


const NewCakeContainer = () => {
    const [number,setNumber]=useState(1)
    const numOfCakes = useSelector(state => state.cake.numOfCakes)
    const dispatch=useDispatch()
  return (
    <div>
          <h2>Num of Cakes - {numOfCakes}</h2>
          <input type="text" value={number} onChange={e=>setNumber(e.target.value)} />
          <button onClick={() => dispatch(buyCake(number))}>buy { number} cake</button>
    </div>
  )
}

export default NewCakeContainer
