import React from 'react';
import About from "../../components/about";
import Carousel from "../../components/carousel";
import StepProcess from "../../components/step-process";
import Order from "../../components/order";
import Partners from "../../components/partners";
import Cards from "../../components/cards";
import WorkStep from "../../components/work-step";


const Home = () => {
    return (
        <main>
            <section id="about" className="marginX">
                <About/>
            </section>
            <section id="vacancy" className="marginX">
                <Carousel/>
            </section>

            {/*<section id="cards">*/}
            {/*    <Cards/>*/}
            {/*</section>*/}
            {/*<section id="roadmap">*/}
            {/*    <StepProcess/>*/}
            {/*</section>*/}
            <section id="work-step" className="marginX">
                <WorkStep/>
            </section>
            <section id="order" className="marginX">
                <Order/>
            </section>
            <section id="partners" className="marginX">
                <Partners/>
            </section>
        </main>
    );
};

export default Home;
