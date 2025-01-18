import {FC, memo} from "react";

export const UserComponent: FC<{ foo: () => void, arr: number[], item: { name: string } }> = memo(({arr, item}) => {
    console.log('user');
    console.log(arr);

    return (
        <div>{item.name}</div>
    );
});