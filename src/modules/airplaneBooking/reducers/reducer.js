const bookmarkInitialState = {

}

const homeInitialState = {
    name:''
}

export const bookmarkReducer =( state=bookmarkInitialState,action)=> {
    const {type,payload} = action
    switch(type)
    {
        case "":
            return
        default:
            return state
    }
}

export const homeScreenReducer= (state=homeInitialState,action)=> {
    const {type,payload} = action
    console.log('the action type',type)
    switch(type)
    {
        case "try":
            return {...state,name:payload}
        default:
            return state
    }
}