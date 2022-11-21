import React, { useCallback } from "react";
import { Movement } from "../api/carApi";
import { Api } from "../App";
import Arrow from "../component/arrow";
import Header from "../component/header";
import Streaming from "../component/streaming";

interface StreamingPageProps {
    api: Api;
    user: string | null;
    setUser: React.Dispatch<React.SetStateAction<string | null>>;
}

const StreamPage = ({ api, user, setUser }: StreamingPageProps) => {
    const movement_func = useCallback(async (dir: Movement) => {
        await api.carApi.move(dir);
    }, []);

    return (
        <>
            <Header user={user} />
            <Streaming api={api} user={user} />;
            <Arrow
                forward_func={() => {
                    movement_func(Movement.forward);
                }}
                backward_func={() => {
                    movement_func(Movement.backward);
                }}
                left_func={() => {
                    movement_func(Movement.left);
                }}
                right_func={() => {
                    movement_func(Movement.right);
                }}
                stop_func={() => {
                    movement_func(Movement.stop);
                }}
                beep_func={() => {
                    movement_func(Movement.beep);
                }}
                speedup_func={() => {
                    movement_func(Movement.speedup);
                }}
                speeddown_func={() => {
                    movement_func(Movement.speeddown);
                }}
            />
        </>
    );
};

export default StreamPage;
