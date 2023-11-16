import {Dispatch, SetStateAction} from "react";

export type Page=  'home'| 'game'| 'result'
export type changePage= {changePage:Dispatch<SetStateAction<Page>>}
