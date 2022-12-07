import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import GradientButton from "./GradientButton";

type NavigationButtonProps = {
    content: string,
    to: string,
}

const NavigationButton = (props: NavigationButtonProps) => {
    let location = useLocation();

    return (
        <>
            <Link to={props.to} style={{textDecoration: 'none'}}>
                <GradientButton
                  isFill={location.pathname === props.to}
                  fromColor="#e1cef1"
                  toColor="#dbd5fe">
                    {props.content}
                </GradientButton>
            </Link>
        </>
    );
};

export default NavigationButton;