const init_state = {
    surname: undefined,
    password: undefined,
    name: undefined,
    re_password: undefined
}

export default (state = init_state, action) => {
    switch (action.type) {
        case 'SET_SURNAME':
            return { ...state, surname: action.obj }
        case 'SET_PASSWORD':
            return { ...state, password: action.obj }
        case 'SET_NAME':
            return { ...state, name: action.obj }
        case 'SET_RE_PASSWORD':
            return { ...state, re_password: action.obj }
        default:
            return state
    }
}