const initialstate = {
    activeUse: 1,
    firstUser: [],
    secondUser: [],
    thirdUser: [],
    fourthUser: [],

}


function rootReducer(state = initialstate, action) {
    switch(action.type){
        case 'ACTIVE_USER':
            return {...state, activeUse: action.payload}
        case 'FIRST_AREA':
            return {...state, firstUser: [...state.firstUser, action.payload]}
        case 'SECOND_AREA':
            return {...state, secondUser: [...state.secondUser, action.payload]}
        case 'THIRD_AREA':
            return {...state, thirdUser: [...state.thirdUser, action.payload]}
        case 'FOURTH_AREA':
        return {...state, fourthUser: [...state.fourthUser, action.payload]}
        default:
            return state;
    }
}

export default rootReducer;