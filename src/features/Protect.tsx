import React from 'react';
import cookie from 'cookie';
import { Navigate } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import actions from '../redux/actions';

const ProtectContainer: any = connect(null, mapDispatchToProps)(Protect);

function mapDispatchToProps(dispatch: any): any {
    const { logIn }: { logIn: any } = actions;

    return bindActionCreators({ logIn }, dispatch);
}

function checkAuth(): boolean {
    const cookies: Record<string, string> = cookie.parse(document.cookie);

    if (!cookies['logged_in']) {
        const code: null | string = window.prompt('Enter access code.', '12345');
        const maxAge: number = 24 * 60 * 60 * 1000;

        if (code !== '12345') {
            window.alert('Invalid access code.');
            return false;
        }

        document.cookie = cookie.serialize('logged_in', 'true', { maxAge });
    }

    return true;
}

function Protect(props: any): React.ReactElement {
    const { component: Component, ...rest }: any = props;

    if (checkAuth()) {
        React.useEffect((): void => {
            props.logIn();
        }, []);

        return <Component {...rest} />;
    }

    return <Navigate to="/" />;
}

export default ProtectContainer;
