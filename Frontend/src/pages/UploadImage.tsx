import FileDragAndDrop from "../components/FileDragAndDrop";
import GradientButton from "../components/GradientButton";
import "./UploadImage.css"

const UploadImage = () => {
    return (
        <>
            <FileDragAndDrop></FileDragAndDrop>
            <button className="ColorButton">Color!</button>
            <GradientButton
                  onClick={() => alert("hi")}
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