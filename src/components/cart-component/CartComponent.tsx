import {ICart} from "../../models/ICart.ts";

interface CartComponentProps {
    cart: ICart
}

export function CartComponent({cart}: CartComponentProps) {
    return <div>
        {cart.total}
    </div>;
}