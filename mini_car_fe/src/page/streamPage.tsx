import React, { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Movement } from "../api/carApi";
import { DefaultPageProps } from "../App";
import Arrow from "../component/arrow";
import Header from "../component/header";
import Streaming from "../component/streaming";

const StreamPage = ({ api, user, setUser }: DefaultPageProps) => {
    const movement_func = useCallback(async (dir: Movement) => {
        await api.carApi.move(dir);
    }, []);
    const nav = useNavigate();
    useEffect(() => {
        if (!user) {
            nav("/");
        }
    });
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
