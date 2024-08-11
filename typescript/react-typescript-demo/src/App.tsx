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
import { User } from "./components/context/User";
import { UserContextProvider } from "./components/context/UserContext";
import { Private } from "./components/auth/Private";
import { Profile } from "./components/auth/Profile";
import { List } from "./components/generics/List";
import { RandomNumber } from "./components/restriction/RandomNumber";
import { Toast } from "./components/templateliterals/Toast";
import { CustomButton } from "./components/html/Button";
import { Text } from "./components/polymorphic/Text";

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
            <Text as="h1" size="lg">
                Heading
            </Text>
            <Text as="p" size="md">
                Paragraph
            </Text>
            <Text as="label" htmlFor={"someId"} size="sm" color="secondary">
                Label
            </Text>
            {/* <CustomButton
                variant="primary"
                onClick={() => console.log("Clicked")}
            >
                Primary Button
            </CustomButton> */}
            {/* <Toast position="center" /> */}
            {/* <RandomNumber value={10} isPositive />
            <RandomNumber value={-10} isNegative />
            <RandomNumber value={0} isZero /> */}
            {/* <List
                items={["치이카와", "우사기", "하치와레"]}
                onClick={(item) => console.log(item)}
            />
            <List items={[1, 2, 3]} onClick={(item) => console.log(item)} /> */}
            {/* <List
                items={[
                    {
                        id: 1,
                        first: "Semin",
                        last: "Kang",
                    },
                    {
                        id: 2,
                        first: "Alex",
                        last: "Lee",
                    },
                ]}
                onClick={(item) => console.log(item)}
            /> */}
            {/* <Private isLoggedIn={true} component={Profile} /> */}
            {/* <UserContextProvider>
                <User />
            </UserContextProvider> */}
            {/* <ThemeContextProvider>
                <Box />
            </ThemeContextProvider> */}
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
