import React from 'react';
import cls from "../style/Button.module.scss"

interface ButtonProps {
    name: string,
}

const Button = (props: ButtonProps) => {
    return (
        <button className={cls.btn}>{props.name}</button>
    );
};

export default Button;
