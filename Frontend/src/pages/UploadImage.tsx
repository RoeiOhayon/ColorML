import FileDragAndDrop from "../components/FileDragAndDrop";
import "./UploadImage.css"

const UploadImage = () => {
    return (
        <>
            <FileDragAndDrop></FileDragAndDrop>
            <button className="ColorButton">Color!</button>
        </>
    );
};

export default UploadImage;