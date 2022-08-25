

export const Appreducer = ( state, action ) => {
    if ( action.type === "Getdata" ) {
        return { ...state, isloading: true, isError: false };
    } else if ( action.type === "GetdataSuccess" ) {
        return { ...state, isloading: false, isError: false }
    } else if ( action.type === "GetdataError" ) {
        return { ...state, isloading: false, isError: true }
    } else {
        return state
    }

}