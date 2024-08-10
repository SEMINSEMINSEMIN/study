type GreetProps = {
    name: string;
    messageCount?: number; // optional
    isLoggedIn: boolean;
};

export const Greet = (props: GreetProps) => {
    const { messageCount = 0 } = props; // optional prop에 대한 default 값 설정

    return (
        <div>
            <h2>
                {props.isLoggedIn
                    ? `Welcome ${props.name}! You have ${messageCount} unread messages`
                    : `Welcome Guest`}
            </h2>
        </div>
    );
};
