import Blog from "./components/blog";
import Hero from "./components/hero";
import NewsLetters from "./components/newsletter";
import Services from "./components/services";

function Home() {
    return (
        <div>
            <Hero/>
            <Services/>
            <Blog/>
            <NewsLetters/>
        </div>
    );
}

export default Home;