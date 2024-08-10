type ButtonProps = {
    // React.MouseEvent<HTMLButtonElement>: 마우스 이벤트인데, 버튼 엘리먼트를 클릭했을 때의 이벤트
    // void: 아무것도 리턴하지 않는다.
    handleClick: (
        event: React.MouseEvent<HTMLButtonElement>,
        id: number
    ) => void;
};

export const Button = (props: ButtonProps) => {
    return (
        <button onClick={(event) => props.handleClick(event, 1)}>Click</button>
    );
};
