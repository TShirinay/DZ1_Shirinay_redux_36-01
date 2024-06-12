

const initialState = {
    counter: 0
}


 const counterReducer = (state = initialState, action) => {
    switch (action.type){
        case 'INCREMENT' :
            return{ counter: state.counter + action.payload}
        case 'DECREMENT' :
            return{ counter: state.counter - action.payload}
        case 'INCREMENT_10' :
            return{ counter: state.counter + action.payload}
        case 'DECREMENT_10' :
            return{ counter: state.counter - action.payload}
        case 'RESET' :
            return{ counter: 0}
        default:
            return state
    }
}

export default counterReducer;