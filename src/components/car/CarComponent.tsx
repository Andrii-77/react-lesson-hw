import {ICar} from "../../models/ICar.ts";

interface CarComponentProps {
    car: ICar
}

export const CarComponent = ({car}: CarComponentProps) => {
    return (
        <div>
            <div>
                {car.id} - {car.brand}
            </div>
        </div>
    );
};