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
            <tr key={index}>
                <td>{index + 1}</td>
                <td>{car.manufacturer}</td>
                <td>{car.model}</td>
            </tr>

        );
    })
    return (
        <table>
            <tbody>
            <tr>
                <th>Numeration</th>
                <th>Manufacturer</th>
                <th>Model</th>
            </tr>
                {carDescribe}
            </tbody>
        </table>
    );
}