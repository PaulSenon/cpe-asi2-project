const cardReducer = (state={current_card:{}}, action)=>{
    return {current_card:action.obj}
};

export default cardReducer;