import React from "react";
import { Profile } from "./Profile";

export const Gallery = () => {
    const galleryName = "먼작귀";

    return (
        <section>
            <h2>{galleryName}</h2>
            <Profile />
        </section>
    );
};
