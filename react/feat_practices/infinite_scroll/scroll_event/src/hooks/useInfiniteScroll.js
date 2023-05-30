import { useState, useEffect, useRef } from "react";
import throttle from "../utils/throttle";

export default function useInfiniteScroll(fetchCallback, handleErrorCallback) {
  const [isFetching, setIsFetching] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    const handleScroll = throttle(() => {
      console.info("스크롤 이벤트");
      if (
        scrollRef.current.scrollTop + scrollRef.current.offsetHeight >=
        scrollRef.current.scrollHeight
      ) {
        setIsFetching(true);
      }
    }, 200);

    const scrollRefEl = scrollRef.current;
    scrollRefEl.addEventListener("scroll", handleScroll);

    return () => {
      scrollRefEl.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!isFetching) {
      return;
    }

    try {
      fetchCallback();
    } catch (error) {
      handleErrorCallback(error);
    } finally {
      setIsFetching(false);
    }
  }, [isFetching, fetchCallback, handleErrorCallback]);

  return { isFetching, setIsFetching, scrollRef };
}
