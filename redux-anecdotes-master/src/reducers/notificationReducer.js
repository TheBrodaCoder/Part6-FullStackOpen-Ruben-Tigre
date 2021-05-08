export const notiAction = (msj) => {
    return {
        type: 'SET_NOT',
        data: msj
    }
}

let timer = 0;

export const handleNoti = (msj, time) => {
    console.log(timer);
    return async dispatch => {
        if (timer !== 0) clearTimeout(timer)

        dispatch({
            type: 'SET_NOT',
            data: msj
        })

        timer = setTimeout(() => {
            dispatch({type: 'RESET_NOT'})
        }, time)

    }
}


const notiReducer = (state = '', action) => {
  
    switch(action.type){
        case 'SET_NOT':
            return action.data
        case 'GET_NOT':
            return state
        case 'RESET_NOT':
            return ''
        default: return state
    }
}

export default notiReducer