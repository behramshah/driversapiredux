export const listReducer = (state = [], action) => {

    switch (action.type) {
        case "GET_DRIVERS":
            return [state, ...action.payload.MRData.DriverTable.Drivers]
        default:
            return state;
    }
}