import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import "./FileDragAndDrop.css"
import plusIcon from "../assets/plus-icon.png";

const fileTypes = ["JPEG", "PNG", "GIF", "jpg"];

const FileDragAndDrop = () => {
    const [imagePreview, setImagePreview] = useState("");
    const handleChange = (file: FileList) => {
        const reader  = new FileReader();
        reader.onload = () => {
            setImagePreview(`url(${reader.result})`);
        }
        reader.readAsDataURL(file[0]);
    };

  return (
    <div className="FileUpload">
      <FileUploader
        multiple={true}
        handleChange={handleChange}
        name="file"
        types={fileTypes}
        dropMessageStyle={{backgroundColor: 'transparent', border: 0}}
      >
        <div className="FileUploadBackground" style={imagePreview ? {backgroundImage: imagePreview} : {}}>
            {
                imagePreview ? <></> :
                    <>
                        <img src={plusIcon} className="PlusIcon"></img>
                        <div className="HelperText">
                            <u>Upload</u> or drop a file here
                        </div>
                    </>
            }
        </div>
        </FileUploader>
    </div>
  );
};

export default FileDragAndDrop;