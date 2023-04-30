import React from 'react';

export type carType = {
    manufacturer: string;
    model: string;
}

export type  topCarsPropsType = {
    cars: carType[];
}

export const Cars = (props: topCarsPropsType) => {
    const carDescribe = props.cars.map((car, index) => {
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{car.manufacturer}</td>
                <td>{car.model}</td>
            </tr>

        );
    })
    return (
        <table>
            <tr>
                <th>Numeration</th>
                <th>Manufacturer</th>
                <th>Model</th>
            </tr>
                {carDescribe}
        </table>
    );
}