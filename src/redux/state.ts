import cookie from 'cookie';

import cars from '../data/data.json';

const state: State = {
    authenticated: !!cookie.parse(document.cookie)['logged_in'],
    cars,
};

export default state;
