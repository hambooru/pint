import "../../assets/styles/App.css";

interface RequiredProps {
  name: string;
  color: string;
}

interface OptionalProps {
  modifier?: string;
}

interface Props extends RequiredProps, OptionalProps {}

export default function Preview(props: Props) {
  const { name, color, modifier = "ff" } = props;
  return (
    <div className="flex flex-row justify-between items-center text-left">
      <p className="flex-start m-1">{name}</p>
      <div
        style={{ backgroundColor: color + modifier }}
        className="w-5 h-5 p-1 m-1 rounded-lg"
      ></div>
    </div>
  );
}
