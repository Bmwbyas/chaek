import {ButtonHTMLAttributes, ReactNode} from "react";

type Props = { children: ReactNode } & ButtonHTMLAttributes<never>
const Button: React.FC<Props> = ({children, ...restProps}) => {
    return (
        <button className={'px-4 py-2' +
            ' text-white font-medium bg-violet-600' +
            ' rounded hover:bg-violet-700 active:bg-violet-500' +
            'disabled:bg-gray-400'}
                {...restProps}  >
            {children}
        </button>
    );
};

export default Button;
