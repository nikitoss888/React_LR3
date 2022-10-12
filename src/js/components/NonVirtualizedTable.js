import Thumbnail from "./Thumbnail";
import {DataTable} from "grommet";

export default function NonVirtualizedTable(props) {
    const { data, viewThumbnail } = props;

    return (
        <DataTable
            sortable={true}
            replace={true}
            background={{
                header: 'brand',
                body: ['light-2', 'light-4'],
            }}
            data={data}
            columns={[
                {
                    property: 'id',
                    primary: true,
                    header: 'ID',
                    pin: true,
                    search: true,
                },
                {
                    property: 'albumId',
                    header: 'Album ID',
                    search: true,
                },
                {
                    property: 'title',
                    header: 'Title',
                    search: true,
                },
                {
                    property: 'thumbnailUrl',
                    header: 'Thumbnail',
                    render: datum =>
                        <Thumbnail url={datum.url} thumbnailUrl={datum.thumbnailUrl}
                                   title={datum.title} viewThumbnail={viewThumbnail}/>,
                    sortable: false,
                }
            ]}
        />
    )
}