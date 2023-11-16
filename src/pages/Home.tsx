import Button from "../components/Button.tsx";
import * as React from "react";
import {changePage} from "../types";

type Props=changePage
const Home:React.FC<Props> = ({changePage}) => {
    return (
        <>
            <h1 className={'text-center my-4 text-black'}>Игра в города на время</h1>
            <div className={'w-full h-1 bg-gray-100 border-t border-white' }/>
            <div className={'p-6 flex flex-col gap-6 text-xm'}>
                <p>Цель: Назвать как можно больше реальных городов.</p>
                <ul className={'ml-6 list-disc'}>
                    <li>Запрещается повторение городов.</li>
                    <li>Названий городов на твердый “ъ” и мягкий “ъ” знак нет. Из-за этого бы
                        пропускаем эту букву и
                        игрок
                        должен назвать город на букву стоящую перед ъ или ь знаком.
                    </li>
                    <li>Каждому игроку дается 2 минуты на размышления, если спустя это время
                        игрок
                        не вводит слово он
                        считается проигравшим
                    </li>
                </ul>
                <div className={'flex justify-center'}>
                    <Button onClick={()=>{changePage("game")}}> Начать игру </Button>
                </div>
            </div>
        </>
    );
};

export default Home;
