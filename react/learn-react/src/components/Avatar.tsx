type AvatarProps = {
    imgPath?: string;
    avatarName?: string;
};

export const Avatar = ({
    imgPath,
    avatarName = "먼작귀 캐릭터",
}: AvatarProps) => {
    return <img className="avatar" src={imgPath} alt={avatarName} />;
};
