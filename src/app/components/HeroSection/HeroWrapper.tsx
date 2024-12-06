import Hero from "./Hero";
import SideBar from "./SideBar";

function HeroWrapper() {

    return (
        <section className="flex w-[1170px] h-[384px]">

            <div className="w-[233px] h-full content-end border-r border-r-second2 bg ">
                <SideBar />
            </div>

            <div className="pt-10 pl-[45px]">
                <Hero />
            </div>

        </section>
    );
};

export default HeroWrapper;