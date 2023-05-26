import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

function mapStateToProps(state: State): { cars: Cars[] } {
    return { cars: state.cars };
}

function Details(props: any): React.ReactElement {
    const cars: Cars[] = props.cars;
    const params: Readonly<any> = useParams();
    const raw: any = cars.filter(e => e.id === Number(params.id))[0];

    const fields: any = {
        Acceleration: raw['Acceleration'],
        Country: raw['Origin'],
        Cylinders: raw['Cylinders'],
        Displacement: raw['Displacement'],
        Horsepower: raw['Horsepower'],
        MPG: raw['Miles_per_Gallon'],
        Weight: raw['Weight_in_lbs'],
        Year: raw['Year'],
    };

    return (
        <div className="details">
            <h2>{raw['Name'].toUpperCase()}</h2>
            {Object.keys(fields).map((e: string): React.ReactElement => (
                <ul key={uuid()}>
                    <li>{e}: {fields[e]}</li>
                </ul>
            ))}
        </div>
    );
}

export default connect(mapStateToProps)(Details);
