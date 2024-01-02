import "./DragandDrop.css"
import { useState, useRef } from "react";
const DragandDrop = ({}) => {
    const [files, setFiles] = useState(null);
    const inputRef = useRef();

    const handleDragOver = (event) => {
        event.preventDefault();
      };
    
      const handleDrop = (event) => {
        event.preventDefault();
        setFiles(event.dataTransfer.files)
      };
      if (files) return (
        <div className="uploads">
            <ul>
                {Array.from(files).map((file, idx) => <li key={idx}>{file.name}</li> )}
            </ul>
            <div className="actions">
                <button className="cancle-select" onClick={() => setFiles(null)}>Cancel</button>
            </div>
        </div>
      )
    return ( 
        <div 
            className="dropzone"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
        >
            <p>Drag and Drop Files to Upload</p>
            <p>Or</p>   
            <input 
                type="file"
                multiple
                onChange={(event) => setFiles(event.target.files)}
                hidden
                accept="image/png, image/jpeg"
                ref={inputRef}
            />
            <button onClick={(e) => {inputRef.current.click(); e.preventDefault();}} className="file-select">Select Files</button>
        </div>
    );
}
 
export default DragandDrop;