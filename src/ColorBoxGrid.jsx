import "./ColorBoxGrid.css"
import ColorBox from "./ColorBox";

export default function ColorBoxGrid() {
    const boxes = [];
    for (let i = 0; i < 25; i++) {
        boxes.push(<ColorBox />);
    }
    return <div className="ColorBoxGrid">{boxes}</div>;
}