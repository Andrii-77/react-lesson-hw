import {FC} from "react";

type MyComponentPropType = {text: string};

const MyComponent:FC<MyComponentPropType> = ({text}) => {
    return (
        <div className='text-3xl font-bold underline'>
            {text}
        </div>
    );
};

export default MyComponent;