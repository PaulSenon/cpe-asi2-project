const init_state = {
    name: undefined
}

export default (state = init_state, action) => {
    switch (action.type) {
        case 'SET_USER_NAME':
            return { ...state, name: action.obj }
        default:
            return state
    }
}