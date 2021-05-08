
export const handleFilter = (msj) => {
    return async dispatch => {
        dispatch({
            type: 'SET_FILTER',
            data: msj
        })
    }
}

const filterReducer = (state = '', action) => {

    switch(action.type){
        case 'SET_FILTER':
            return action.data
        default: return state
    }
}

export default filterReducer