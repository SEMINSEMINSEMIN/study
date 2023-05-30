import { useCallback } from "react";
import useInfiniteScroll from "../hooks/useInfiniteScroll";
import { searchPeople } from "../api/searchPeople";
import "./peopleList.css";

const PeopleList = ({ listData, setListData, pageInfos }) => {
  const updateOnScroll = useCallback(async () => {
    if (!pageInfos.current) return;
    if (!pageInfos.current.next) return;

    const splited = pageInfos.current.next.split("/");
    const endPoint = splited[splited.length - 1];

    console.info("스크롤 이벤트로 인한 데이터 요청");
    const { count, next, previous, results } = await searchPeople(endPoint);
    pageInfos.current = { count, next, previous };
    setListData((prev) => [...prev, ...results]);
  }, [pageInfos, setListData]);

  const handleErrorOnScroll = useCallback((error) => {
    window.alert("something went wrong");
    console.warn(error);
  }, []);

  const { isFetching, scrollRef } = useInfiniteScroll(
    updateOnScroll,
    handleErrorOnScroll
  );

  const list = listData.map((person, index) => (
    <li key={index} className="people-list-item">
      {`${index + 1}. ${person.name}`}
    </li>
  ));

  return (
    <>
      {isFetching ? <p>로딩중</p> : ""}
      <ul className="people-list-container" ref={scrollRef}>
        {list}
      </ul>
    </>
  );
};

export default PeopleList;
