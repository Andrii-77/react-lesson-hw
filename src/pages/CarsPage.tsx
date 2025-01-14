import {useEffect, useState} from "react";
import {getCars} from "../services/api.service.ts";
import {ICar} from "../models/ICar.ts";
import {CarComponent} from "../components/car/CarComponent.tsx";

export const CarsPage = () => {

    const [cars, setCars] = useState<ICar[]>([]);

    useEffect(() => {
        getCars().then((cars) => {
            setCars(cars);
        })
    }, []);

    return (
        <>
            {
                cars.map((car) => <CarComponent  key={car.id} car={car}/>)
            }
        </>
    );
};