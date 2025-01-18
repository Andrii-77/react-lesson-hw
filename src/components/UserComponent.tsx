import {FC, memo} from "react";

export const UserComponent: FC<{ foo: () => void, arr: number[] }> = memo(({arr}) => {
    console.log('user');
    console.log(arr);

    return (
        <div>user</div>
    );
});