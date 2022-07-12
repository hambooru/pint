import react from "react";
import "../../assets/styles/App.css";

interface Props {
    name: string,
    color?: string,
    textcolor?: string | "#ffffff",
}

export default function CardTitle(props: Props) {
    const { name,color, textcolor } = props;
   return(
    <div style={{ backgroundColor: textcolor }} className="flex-start align-left text-l p-1 rounded-t-lg">
          <p className="text-bold">{name} {color}</p>
        </div>
   );  
}