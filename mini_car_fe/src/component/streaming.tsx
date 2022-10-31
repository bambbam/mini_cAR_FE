import React, { useEffect, useState } from "react";
import { Api } from "../App";

interface StreamingProps {
    url: string;
}

const Streaming = ({ url }: StreamingProps) => {
    return <img src={url}></img>;
};

export default Streaming;
