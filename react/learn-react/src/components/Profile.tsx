import { Card } from "./Card";
import { Avatar } from "./Avatar";

type ProfileProps = {
    imgPath: string;
    profileName?: string;
};

// 리액트 컴포넌트 함수는 단 하나의 아규먼트를 허용한다.
//// 단 하나의 아규먼트란? props 객체!
export const Profile = (props: ProfileProps) => {
    // JSX: 자바스크립트 내에 마크업을 임베드할 수 있게 해준다.
    return (
        <Card>
            <Avatar {...props} />
        </Card>
    );
};
