import { useState } from "react";
import './ColorBox.css';

export default function ColorBox() {
    const colors = [
        "#E53935",
        "#E91E63",
        "#9C27B0",
        "#673AB7",
        "#3F51B5",
        "#2196F3",
        "#03A9F4",
        "#00BCD4",
        "#009688",
        "#4CAF50",
        "#8BC34A",
        "#CDDC39",
        "#FFEB3B",
        "#FFC107",
        "#FF9800",
        "#FF5722",
        "#ff6d00",
        "#f29479",
        "#3c096c"
    ];

    const randomColorIndex = () => {
        return Math.floor(Math.random() * colors.length);
    };

    const [color, setColor] = useState(colors[randomColorIndex()]);

    const changeColor = () => {
        setColor(colors[randomColorIndex()]);
    };

    return (
        <div style={{ backgroundColor: color }} onMouseOver={changeColor} className="ColorBox" >

        </div >
    );

}