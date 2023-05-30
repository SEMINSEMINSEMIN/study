import { useState, useRef, useEffect } from "react";
import PeopleList from "./components/PeopleList";
import { searchPeople } from "./api/searchPeople";

const App = () => {
  const [data, setData] = useState([]);
  const pageInfos = useRef();

  useEffect(() => {
    (async function () {
      try {
        // const response = await httpClient.fetch("people/");
        // const data = await response.json();
        // const { count, next, previous, results } = data;
        const { count, next, previous, results } = await searchPeople(
          "?page=1"
        );
        pageInfos.current = { count, next, previous };
        setData(results);
      } catch (error) {
        window.alert("something went wrong");
        console.warn(error);
      }
    })();
  }, []);

  return (
    <>
      <h1>Infinite Scroll</h1>
      <PeopleList listData={data} setListData={setData} pageInfos={pageInfos} />
    </>
  );
};

export default App;
