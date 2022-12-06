import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./NavigationButton.css";

type NavigationButtonProps = {
    content: string,
    to: string
}

const NavigationButton = (props: NavigationButtonProps) => {
    let location = useLocation();

    return (
        <>
            <Link to={props.to} style={{textDecoration: 'none'}}>
                <button className="GradientButton" style={location.pathname === props.to ? {background: "linear-gradient(90deg, rgba(225,206,241,1) 0%, rgba(219,213,254,1) 100%)"} : {}}>
                    {props.content}
                </button>
            </Link>
        </>
    );
};

export default NavigationButton;