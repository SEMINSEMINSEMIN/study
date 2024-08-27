import React from "react";
import { Profile } from "./Profile";

export const Gallery = () => {
    const galleryName = "먼작귀";
    const alertNum = 0;

    return (
        <section>
            <h2>{galleryName}</h2>
            {alertNum > 0 && <p>{alertNum}개의 알림이 있습니다.</p>}
            <Profile imgPath="https://i.pinimg.com/736x/51/7d/4e/517d4ea58fa6c12aca4e035cdbf257b6.jpg" />
            <Profile profileName="치이카와" imgPath="" />
            <Profile
                profileName="하치와레"
                imgPath="https://i.pinimg.com/564x/35/c8/f4/35c8f4de80bf8d39715a18ac532ae313.jpg"
            />
        </section>
    );
};
