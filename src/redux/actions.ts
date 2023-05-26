import axios from 'axios';

const actions: any = {
    deleteCar,
    fetchMakes,
    logIn,
    logOut,
};

function deleteCar(id: number): { payload: number, type: string } {
    return {
        payload: id,
        type: 'DELETE_CAR',
    };
}

function fetchMakes(): Function {
    return (dispatch: Function): void => {
        axios.get('https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json')
            .then((res: any): any[] => res.data.Results.slice(0, 100))
            .then((data: any[]): void => {
                dispatch({
                    payload: data,
                    type: 'FETCH_MAKES',
                });
            })
            .catch((err: any): void => { console.log(err) });
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

export default actions;
