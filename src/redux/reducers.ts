import { combineReducers } from 'redux';

const reducers: any = combineReducers({
    authenticated,
    cars,
});

function authenticated(state: boolean = false, action: any): boolean {
    switch (action.type) {
        case 'LOG_IN':
            return true;
        case 'LOG_OUT':
            return false;
    }

    return state;
}

function cars(state: Cars[] = [], action: any): Cars[] {
    switch (action.type) {
        case 'DELETE_CAR':
            return state.filter(e => e.id !== action.payload);
    }

    return state;
}

export default reducers;
