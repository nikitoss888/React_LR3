import {Button, Image, Layer, Text} from "grommet";
import {useState} from "react";

export default function Thumbnail(props) {
    const { url, thumbnailUrl, title, viewThumbnail } = props;
    const [showImage, setShowImage] = useState(false);

    const handleShowImage = () => {
        setShowImage(true);
    }
    const handleHideImage = () => {
        setShowImage(false);
    }


    return (
        <Button onClick={handleShowImage} style={{width: "fit-content", textDecoration: "underline"}}>
            { viewThumbnail ? <Image src={thumbnailUrl} alt={title}/> : <Text>{thumbnailUrl}</Text> }
            { showImage &&
                <Layer onEsc={handleHideImage} onClickOutside={handleHideImage}>
                    <Image src={url} alt={title}/>
                </Layer>
            }
        </Button>
    )
}