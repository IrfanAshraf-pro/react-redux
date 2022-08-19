import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUsers } from '../redux'
const UserContainer = () => {
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()
    useEffect(() => {
     dispatch(fetchUsers())   
    },[])
  return (
    <div> 
          {
              user.loading ? (<p>Loading</p> ): (
                  user.error.length > 0 ? <p>{user.error}</p> : (
                      user.users.map((user) => (
                          <p key={user.id}>{ user.name}</p>
                      ))
                  )
              )
      }
    </div>
  )
}

export default UserContainer
