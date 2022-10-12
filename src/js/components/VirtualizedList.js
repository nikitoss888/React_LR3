import Thumbnail from "./Thumbnail";
import { FixedSizeList as List } from "react-window";
import {Box} from "grommet";

export default function VirtualizedList(props) {
    const { data, viewThumbnail } = props;
    console.log(data);
    const Row = ({ index, style }) => {
        const datum = data[index];
        return (
            <div key={data[index].id} style={style}>
                <Thumbnail url={datum.url} thumbnailUrl={datum.thumbnailUrl}
                           title={datum.title} viewThumbnail={viewThumbnail}/>
                {index < data.length - 1 ? <hr/> : null}
            </div>
        )
    }

    return (
        <Box border={{color: 'dark-5', size: 'small'}} pad="medium" gap="medium">
            <List
                height={500}
                width="100%"
                itemCount={data.length}
                itemSize={viewThumbnail ? 175 : 35}
                style={{textAlign: "center"}}
            >
                {Row}
            </List>
        </Box>
    )
}
