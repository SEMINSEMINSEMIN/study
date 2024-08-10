type StatusProps = {
    // status: string; => 이건 아무 문자열이나 넣어도 된다는 걸 의미
    status: "loading" | "success" | "error"; // Union
};

export const Status = (props: StatusProps) => {
    let message;

    if (props.status === "loading") {
        message = "Loading...";
    } else if (props.status === "success") {
        message = "Data fetched successfully!";
    } else if (props.status === "error") {
        message = "Error fetching data";
    }

    return (
        <div>
            <p>Status - {message}</p>
        </div>
    );
};
