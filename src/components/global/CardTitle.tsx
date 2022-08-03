import "../../assets/styles/App.css";
interface Props {
  name: string;
  color?: string;
  textcolor?: string | "#000000";
  className?: string;
}

export default function CardTitle(props: Props) {
  const { name, color, textcolor } = props;
  return (
    <div
      style={{ backgroundColor: textcolor }}
      className={`flex-start align-left text-white text-l p-1 rounded-t-[4px]`}
    >
      <p className="text-bold">
        {name} {color}
      </p>
    </div>
  );
}
