import { BUY_CANDY } from './CandyTypes'

const initialState = {
    numOfCandy:15
}

const candyReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CANDY:
            return {
                ...state,
                numOfCandy:state.numOfCandy-1
            }
        default:
            return state
    }
}

export default candyReducer