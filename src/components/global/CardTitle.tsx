import "../../assets/styles/App.css";
import chroma from "chroma-js";
interface Props {
  name: string;
  color?: string;
  textcolor?: string | "#ffffff";
  className?: string;
}

export default function CardTitle(props: Props) {
  const { name, color, textcolor } = props;
  return (
    <div
      style={{ backgroundColor: textcolor }}
      className={`flex-start align-left text-white text-l p-1 rounded-t-[6px]`}
    >
      <p className="text-bold">
        {name} {color}
      </p>
    </div>
  );
}
