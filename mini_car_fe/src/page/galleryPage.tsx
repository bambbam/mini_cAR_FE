import React, { useEffect, useState } from "react";
import { Image } from "../api/galleryApi";
import { Api, DefaultPageProps } from "../App";
import Header from "../component/header";
import "./gallery.scss";

const ImageComponent = (img: Image, api: Api) => {
    return (
        <div className="image_table_item">
            <img className="image_table_item_img" key={img.id} src={api.s3Api.get_url(img.car_id, img.key)}></img>
            <div></div>
        </div>
    );
};

const VideoComponent = (img: Image, api: Api) => {
    return (
        <div className="image_table_item">
            <video className="image_table_item_img" key={img.id} src={api.s3Api.get_url(img.car_id, img.key)}></video>
            <div></div>
        </div>
    );
};

const GalleryPage = ({ api, user, setUser }: DefaultPageProps) => {
    const [imgList, setImgList] = useState<Image[]>([]);
    useEffect(() => {
        const f = async () => {
            const imgs = await api.galleryApi.get_img_list();
            setImgList(imgs.data);
            console.log(imgs.data);
        };
        f();
    }, []);
    return (
        <>
            <Header user={user} />
            {imgList.length == 0 && <div>이미지가 없습니다.</div>}
            <div className="image_table">
                {imgList.map((img) => {
                    if (img.type == "img") {
                        return ImageComponent(img, api);
                    } else {
                        return VideoComponent(img, api);
                    }
                })}
            </div>
        </>
    );
};

export default GalleryPage;
