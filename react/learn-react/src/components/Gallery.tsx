import React from "react";
import { Profile } from "./Profile";

export const Gallery = () => {
    const galleryName = "먼작귀";

    return (
        <section>
            <h2>{galleryName}</h2>
            <Profile imgPath="https://i.pinimg.com/736x/51/7d/4e/517d4ea58fa6c12aca4e035cdbf257b6.jpg" />
            <Profile
                profileName="치이카와"
                imgPath="https://i.pinimg.com/736x/a7/94/b4/a794b44732586e27ef353048c21dca8b.jpg"
            />
            <Profile
                profileName="하치와레"
                imgPath="https://i.pinimg.com/564x/35/c8/f4/35c8f4de80bf8d39715a18ac532ae313.jpg"
            />
        </section>
    );
};
