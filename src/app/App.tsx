import Container from "../components/Container.tsx";
import {useState} from "react";
import {Page} from "../types";
import Home from "../pages/Home.tsx";
import Game from "../pages/game";
import Result from "../pages/Result.tsx";

function App() {
    const [page, setPage] = useState<Page>("home")


    return (
        <div className={'flex w-screen h-screen justify-center items-center sans text-base text-gray-700'}>
            <Container>
                {page === 'home' && <Home changePage={setPage} />}
                {page === 'game' && <Game changePage={setPage}/>}
                {page === 'result' && <Result changePage={setPage} />}
            </Container>
        </div>
    )
}

export default App
