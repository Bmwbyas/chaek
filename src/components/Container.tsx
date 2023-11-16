import {ReactNode} from "react";

type Props={
    children:ReactNode
}
const Container:React.FC<Props> = ({children}) => {
    return (
        <div className={'max-w-2xl bg-white flex flex-col items-center rounded '}>
            {children}
        </div>
    );
};

export default Container;
