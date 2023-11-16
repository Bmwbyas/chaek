import {changePage} from "../types";
import Button from "../components/Button.tsx";


type Props=changePage
const Result:React.FC<Props> = ({changePage}) => {
    return (
        <div>
            <Button onClick={()=>{changePage("game")}}>Начать новую игру</Button>
        </div>
    );
};

export default Result;
