const initialState = {
    data: {
        login: '',
        password: 0
    }
}

export default function dataReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_NEW_DATA':
            return {
                data: action.payload
            };
        default:
            return state;
    }
}