import {useEffect, useState} from "react";
import {Box, CheckBox, TextInput, FormField} from "grommet";
import NonVirtualizedTable from "./NonVirtualizedTable";
import VirtualizedList from "./VirtualizedList";

export default function Data(props) {
    const { dataUrl, virtualized } = props;
    const [data, setData] = useState([]);
    const [viewThumbnail, setViewThumbnail] = useState(false);
    const [maxTitleWords, setMaxTitleWords] = useState(7);
    const [isVirtualized, setIsVirtualized] = useState(virtualized);

    useEffect(() => {
        fetch(dataUrl)
            .then(response => {
                if (response.ok) return response.json()
                throw response
            })
            .then(json => setData(json.filter((item) => item.title.split(' ').length <= maxTitleWords)))
            .catch(error => console.error(error));
    }, [dataUrl, maxTitleWords]);

    return (
        <Box pad="large" gap="medium" >
            <Box direction="row" gap="medium">
                <CheckBox label="View thumbnail" checked={viewThumbnail}
                          onChange={event => setViewThumbnail(event.target.checked)} />
                <CheckBox label="Virtualized list" checked={isVirtualized}
                            onChange={event => setIsVirtualized(event.target.checked)} />
                <FormField label="Max title words" htmlFor="maxTitleWords">
                    <TextInput type="number" value={maxTitleWords} id="maxTitleWords"
                               onChange={event => setMaxTitleWords(event.target.value)} />
                </FormField>
            </Box>
            {isVirtualized ?
                <VirtualizedList data={data} viewThumbnail={viewThumbnail} /> :
                <NonVirtualizedTable data={data} viewThumbnail={viewThumbnail} />
            }
        </Box>
    )
}