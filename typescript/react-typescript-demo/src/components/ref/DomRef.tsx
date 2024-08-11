import { useRef, useEffect } from "react";

export const DomRef = () => {
    // null!: ref가 access 하는 시점에 null이 아니라고 확신할 수 있는 경우
    const inputRef = useRef<HTMLInputElement>(null!);

    useEffect(() => {
        // null! 사용 덕분에 optional chaining을 사용하지 않아도 오류가 뜨지 않는다.
        inputRef.current.focus();
    }, []);

    return (
        <div>
            <input type="text" ref={inputRef} />
        </div>
    );
};
