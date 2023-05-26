import React from 'react';
import cookie from 'cookie';
import { Navigate } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import actions from '../redux/actions';

function mapDispatchToProps(dispatch: any): any {
    const { logOut }: { logOut: any } = actions;

    return bindActionCreators({ logOut }, dispatch);
}

function Logout(props: any): React.ReactElement {
    React.useEffect((): void => {
        document.cookie = cookie.serialize('logged_in', '', { maxAge: 0 });
        props.logOut();
    }, []);

    return <Navigate to="/" />;
}

export default connect(null, mapDispatchToProps)(Logout);
