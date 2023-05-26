interface Cars {
    Acceleration: number,
    Cylinders: number,
    Displacement: number,
    Horsepower: number,
    Miles_per_Gallon: null | number,
    Name: string,
    Origin: string,
    Weight_in_lbs: number,
    Year: string,
    id: number,
}

interface State {
    authenticated: boolean,
    cars: Cars[],
}
