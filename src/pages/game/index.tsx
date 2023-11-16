import {changePage} from "../../types";
import Button from "../../components/Button.tsx";

type Props=changePage
const Game:React.FC<Props> = ({changePage}) => {
    return (
        <div>
            <Button onClick={()=>changePage("result")}><div className={''}/></Button>
        </div>
    );
};

export default Game;
