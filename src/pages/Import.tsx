import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { v4 as uuid } from 'uuid';

import actions from '../redux/actions';

function mapStateToProps(state: State): { makes: Makes[] } {
    return { makes: state.makes };
}

function mapDispatchToProps(dispatch: any): any {
    const { fetchMakes }: { fetchMakes: any } = actions;

    return bindActionCreators({ fetchMakes }, dispatch);
}

function Import(props: any): React.ReactElement {
    function handleClick() {
        props.fetchMakes();
    }

    return (
        <div className="makes">
            <button onClick={handleClick}>FETCH</button>
            <ul>
                {props.makes.map((e: Makes): React.ReactElement => (
                    <li key={uuid()}>{e.Make_ID}: {e.Make_Name.trim()}</li>
                ))}
            </ul>
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Import);
