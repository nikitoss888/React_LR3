import './App.css';
import {Heading} from "grommet";
import Data from "./js/components/Data";
const DATA_URL = 'https://jsonplaceholder.typicode.com/photos';

function App() {
    return (
        <>
            <Heading level={1} textAlign="center" margin="large">Fetching data in table or virtualized list</Heading>
            <Data dataUrl={DATA_URL} virtualized={false} />
        </>
    );
}

export default App;
