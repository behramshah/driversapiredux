export const offsetReducer = (state = 0, action) => {

    switch (action.type) {
        case "NEXT":
            return (state + 10)
        case "PREV":
            return (state - 10)
        default:
            return state;
    }
}