import React from "react";
import Square from "./square";

interface ArrowProps {
    forward_func: () => void;
    backward_func: () => void;
    left_func: () => void;
    right_func: () => void;
    stop_func: () => void;
    beep_func: () => void;
    speedup_func: () => void;
    speeddown_func: () => void;
}

const Arrow = (prop: ArrowProps) => {
    return (
        <div style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Square bgcolor="black" fntcolor="white" onClick={prop.forward_func}>
                    앞으로
                </Square>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Square bgcolor="black" fntcolor="white" onClick={prop.left_func}>
                    왼쪽
                </Square>
                <Square bgcolor="black" fntcolor="white" onClick={prop.backward_func}>
                    뒤로
                </Square>
                <Square bgcolor="black" fntcolor="white" onClick={prop.right_func}>
                    오른쪽
                </Square>
            </div>

            <div>
                <Square bgcolor="black" fntcolor="white" onClick={prop.stop_func}>
                    멈춤
                </Square>
                <Square bgcolor="black" fntcolor="white" onClick={prop.beep_func}>
                    경적
                </Square>

                <Square bgcolor="black" fntcolor="white" onClick={prop.speedup_func}>
                    속도 증가
                </Square>
                <Square bgcolor="black" fntcolor="white" onClick={prop.speeddown_func}>
                    속도 감소
                </Square>
            </div>
        </div>
    );
};

export default Arrow;
