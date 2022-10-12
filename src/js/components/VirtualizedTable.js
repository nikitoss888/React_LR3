import Thumbnail from "./Thumbnail";
import {AutoSizer, Grid} from 'react-virtualized';

export default function VirtualizedTable(props) {
    const { data } = props;
    console.log(data);
    const cellRenderer = ({ columnIndex, key, rowIndex, style }) => {
        return (
            <div key={key} style={style}>
                {data[rowIndex][columnIndex]}
            </div>
        );
    }

    return (
        <AutoSizer>
            {({ height, width }) => (
                <Grid
                    cellRenderer={cellRenderer}
                    height={height}
                    width={width}
                    rowHeight={30}
                    columnWidth={200}
                    rowCount={30}
                    columnCount={4}
                />
            )}
        </AutoSizer>
    )
}
