import React, { useState } from "react";

const Preview = (src: string) => {
    return <img src={src} />;
};

interface Image {
    id: string;
    uploaded_time: string;
    s3_url: string;
}

const GalleryPage = () => {
    const [imgList, setImgList] = useState<Image[]>([]);

    return <div></div>;
};

export default GalleryPage;
