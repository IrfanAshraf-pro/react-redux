import React from 'react'
import {connect} from 'react-redux'
import { buyCake, buyIcecream } from '../redux'

function ItemContainer(props) {
  return (
    <div>
          <h2>HOC {props.name} - {props.item }</h2>
          <button onClick={props.buyItem}>Buy { props.name}</button>
    </div>
  )
}

const mapStateToProps = (state,ownProps) => {
    const itemState = ownProps.cake ? state.cake.numOfCakes : state.iceCream.numOfIceCreams
    const info=ownProps.cake? 'Cake':'IceCream'
    return {
        item: itemState,
        name:info
    }
}

const mapDispatchToProps = (dispatch,ownProps) => {
    const dispatchFunction = ownProps.cake ?
        () => dispatch(buyCake()) :
        () => dispatch(buyIcecream())
    return {
            buyItem:dispatchFunction
        }
}

export default connect(mapStateToProps,mapDispatchToProps)(ItemContainer)
