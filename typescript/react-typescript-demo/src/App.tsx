import "./App.css";
import { Greet } from "./components/Greets";
import { Heading } from "./components/Heading";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";
import { Oscar } from "./components/Oscar";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { Container } from "./components/Container";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import { Box } from "./components/context/Box";

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
            <ThemeContextProvider>
                <Box />
            </ThemeContextProvider>
            {/* <Container
                styles={{ border: "1px solid black", padding: "1rem" }}
            /> */}
            {/* <Button
                handleClick={(event, id) => {
                    console.log("Button Clicked", event);
                    console.log("id", id);
                }}
            /> */}
            {/* <Input value="" /> */}
            {/* <Status status="loading" /> */}
            {/* <Heading>Placeholder Text</Heading> */}
            {/* <Oscar>
                <Heading>Oscar goes to Leonardo Dicpario!</Heading>
            </Oscar> */}
            {/* <Greet name="Semin" isLoggedIn={false} /> */}
            {/* <Greet name="Semin" messageCount={10} isLoggedIn={false} /> */}
            {/* <Person name={personName} /> */}
            {/* <PersonList names={nameList} /> */}
        </div>
    );
}

export default App;
