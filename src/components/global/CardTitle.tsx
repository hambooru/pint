import react from "react";
import "../../assets/styles/App.css";

interface Props {
    name: string,
    color?: string,
}

export default function CardTitle(props: Props) {
    const { name,color } = props;
   return(
    <div className="flex-start align-left text-l p-1">
          <p>{name} {color}</p>
        </div>
   );  
}