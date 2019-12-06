export const setSelectedCard=(card_obj)=>{
    return {
        type: 'UPDATE_SELECTED_CARD',
        obj: card_obj
    }
}

export const setSurname=(user_obj)=>{
    return {
        type: 'SET_SURNAME',
        obj: user_obj
    }
}

export const setPassword=(password_obj)=>{
    return {
        type: 'SET_PASSWORD',
        obj: password_obj
    }
}

export const setName=(password_obj)=>{
    return {
        type: 'SET_NAME',
        obj: password_obj
    }
}

export const setRePassword=(password_obj)=>{
    return {
        type: 'SET_RE_PASSWORD',
        obj: password_obj
    }
}