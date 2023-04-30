import React from 'react';

export type carType = {
    manufacturer: string;
    model: string;
}

export type  topCarsPropsType = {
    cars: carType[];
}

export const Cars = (props: topCarsPropsType) => {
    const carDescribe = props.cars.map(car => {
        return (
            <li>{car.manufacturer} - {car.model}</li>
        );
    })
    return (
        <ul>
            {carDescribe}
        </ul>
    );
}