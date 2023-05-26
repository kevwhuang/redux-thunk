function deleteCar(id: number): { payload: number, type: string } {
    return {
        payload: id,
        type: 'DELETE_CAR',
    };
}

function logIn(): { type: string } {
    return {
        type: 'LOG_IN',
    };
}

function logOut(): { type: string } {
    return {
        type: 'LOG_OUT',
    };
}

export default {
    deleteCar,
    logIn,
    logOut,
};
