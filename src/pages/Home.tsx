import React from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { v4 as uuid } from 'uuid';

import actions from '../redux/actions';

function mapStateToProps(state: State): { authenticated: boolean, cars: Cars[] } {
    return {
        authenticated: state.authenticated,
        cars: state.cars,
    };
}

function mapDispatchToProps(dispatch: any): any {
    const { deleteCar }: { deleteCar: any } = actions;

    return bindActionCreators({ deleteCar }, dispatch);
}

function Home(props: any): React.ReactElement {
    const cars: Object[] = props.cars;

    function handleClick(id: number): void {
        props.deleteCar(id);
    }

    return (
        <div className="cards">
            {cars.map((car: any): React.ReactElement => (
                <div key={uuid()}>
                    <h6>{car['Name'].toUpperCase()}</h6>
                    <ul>
                        <li>Horsepower: {car['Horsepower']}</li>
                        <li>Cylinders: {car['Cylinders']}</li>
                        <li>MPG: {car['Miles_per_Gallon']}</li>
                    </ul>
                    <Link className="details-link" to={`details/${car.id}`}>
                        View Details
                    </Link>
                    {props.authenticated &&
                        <button className="delete" onClick={() => handleClick(car.id)}>
                            Delete
                        </button>
                    }
                </div>
            ))}
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
