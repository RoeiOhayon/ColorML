import { useState } from "react";
import "./GradientButton.css"

type GradientButtonProps = {
    fromColor: string
    toColor: string
    isFill: boolean
    children?: React.ReactNode
    lightenOnHover?: boolean
    onClick?: React.MouseEventHandler<HTMLButtonElement>
};

const GradientButton = (props: GradientButtonProps) => {
    const [isHover, setIsHover] = useState(false);

    const style = {
        filter: props.lightenOnHover && isHover ? "brightness(105%)" : "",
        background: isHover || props.isFill ?
            `linear-gradient(90deg, ${props.fromColor} 0%, ${props.toColor} 100%)` : "transparent"
    };

    return (
        <button onClick={props.onClick} className="GradientButton" style={style} onMouseOver={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
            {props.children}
        </button>
    );
};

export default GradientButton;