import About from './about';
import Blogs from "./blogs";
import Services from "./services";
import Home from "./home";
import Works from "./works";

const main =() =>{
    return(
        <main className="main">
            <Home/>
            <About/>
            <Services/>
            <Works/>
            <Blogs/>
        </main>
    );
};

export default main;