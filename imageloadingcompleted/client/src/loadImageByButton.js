import React, {useState} from 'react';

const LoadByButton = () => {
    const [image, setImage] = useState({preview: "", raw: ""});

    const handleImageSelect = (e) => {
        if(e.target.files.length) {
            setImage({
                preview: URL.createObjectURL(e.target.files[0]),
                raw: e.target.files[0]
            })

            console.log(e.target.files[0].name.split('.')[1]);
        }
    }
    return(
        <div>

            <input type="file" id="image" onChange={handleImageSelect}/>
            {/* <div id="showImage">
                {document.getElementById("image").value !== null ? 
                  <img src={document.getElementById("image").value} alt="image" /> : null
                }
            </div> */}
            <img src={image.preview} alt=""/>
            
        </div>
    )
}

export default LoadByButton;