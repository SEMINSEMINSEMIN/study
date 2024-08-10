import "./App.css";
import { Greet } from "./components/Greets";
import { Heading } from "./components/Heading";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";
import { Oscar } from "./components/Oscar";

function App() {
    const personName = {
        first: "Bruce",
        last: "Wayne",
    };

    const nameList = [
        {
            first: "Bruce",
            last: "Wayne",
        },
        {
            first: "Clark",
            last: "Kent",
        },
        {
            first: "Princess",
            last: "Diana",
        },
    ];

    return (
        <div className="App">
            <Status status="loading" />
            <Heading>Placeholder Text</Heading>
            <Oscar>
                <Heading>Oscar goes to Leonardo Dicpario!</Heading>
            </Oscar>
            <Greet name="Semin" isLoggedIn={false} />
            {/* <Greet name="Semin" messageCount={10} isLoggedIn={false} /> */}
            {/* <Person name={personName} /> */}
            {/* <PersonList names={nameList} /> */}
        </div>
    );
}

export default App;
