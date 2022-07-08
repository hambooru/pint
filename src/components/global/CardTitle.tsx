import react from "react";
import "../../assets/styles/App.css";

interface Props {
    name: string,
}

export default function CardTitle(props: Props) {
    const { name } = props;
   return(
    <div className="flex-start align-left text-l p-1">
          <p>{name}</p>
        </div>
   );  
}