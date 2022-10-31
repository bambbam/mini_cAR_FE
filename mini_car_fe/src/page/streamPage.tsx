import React from "react";
import { Api } from "../App";
import Header from "../component/header";
import Streaming from "../component/streaming";

interface StreamingPageProps {
    api: Api;
}

const StreamPage = ({ api }: StreamingPageProps) => {
    return (
        <>
            <Header />
            <Streaming api={api} />;
        </>
    );
};

export default StreamPage;