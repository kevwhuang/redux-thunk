import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { connect } from 'react-redux';

import { AppBar, Toolbar, Typography } from '@mui/material';

function mapStateToProps(state: State): { authenticated: boolean } {
    return { authenticated: state.authenticated };
}

function Navbar(props: any): React.ReactElement {
    return (
        <>
            <AppBar position="relative">
                <Toolbar>
                    <Typography className="header" variant="h4" style={{ flexGrow: '1' }}>
                        REDUX THUNK
                    </Typography>
                    <div className="navbar">
                        <Link className="nav-link" to="">Home</Link>
                        <Link className="nav-link" to="about">About</Link>
                        <Link className="nav-link" to="import">Import</Link>
                        {props.authenticated &&
                            <Link className="nav-link" to="logout">Logout</Link>
                        }
                    </div>
                </Toolbar>
            </AppBar>
            <Outlet />
        </>
    );
}

export default connect(mapStateToProps)(Navbar);
