import FileDragAndDrop from "../components/FileDragAndDrop";
import GradientButton from "../components/GradientButton";
import "./UploadImage.css"
import colorApi from "../apis/color";

const UploadImage = () => {
    return (
        <>
            <FileDragAndDrop />
            <GradientButton
              className="ColorButton"
              onClick={() => alert(colorApi.colorImage("hi"))}
              isFill={true}
              fromColor="#f9f3ff"
              toColor="#abd4ff"
              lightenOnHover={true}>
                Color!
            </GradientButton>
        </>
    );
};

export default UploadImage;