type OscarProps = {
    // ReactNode: React가 렌더링할 수 있는 모든 것
    children: React.ReactNode;
};

export const Oscar = (props: OscarProps) => {
    return <div>{props.children}</div>;
};
