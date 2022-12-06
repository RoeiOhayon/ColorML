import { Link } from "react-router-dom";
import "./NavigationButton.css";

type NavigationButtonProps = {
    content: string,
    to: string
}

const NavigationButton = (props: NavigationButtonProps) => {
    return (
        <>
            <Link to={props.to} style={{textDecoration: 'none'}}>
                <button className="GradientButton">
                    {props.content}
                </button>
            </Link>
        </>
    );
};

export default NavigationButton;