import React, { useEffect, useState } from "react";
import { Api } from "../App";

interface StreamingProps {
    api: Api;
}

const Streaming = ({ api }: StreamingProps) => {
    return <img src={api.videoApi.get_stream_video_url()}></img>;
};

export default Streaming;
