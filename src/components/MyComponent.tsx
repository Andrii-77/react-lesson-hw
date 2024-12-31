import {FC} from "react";
import styles from './MyCcomponent.module.css';

type MyComponentPropType = {text: string};

const MyComponent:FC<MyComponentPropType> = ({text}) => {
    return (
        <div className={styles.target}>
            {text}
        </div>
    );
};

export default MyComponent;