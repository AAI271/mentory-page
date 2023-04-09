import React from 'react';
import About from "../../components/about";
import Carousel from "../../components/carousel";
import StepProcess from "../../components/step-process";
import Order from "../../components/order";


const Home = () => {
    return (
        <main>
            <section className="marginX">
                <About/>
            </section>
            <section className="marginX">
                <Carousel/>
            </section>
            <section>
                <StepProcess/>
            </section>
            <section className="marginX">
                <Order/>
            </section>
        </main>
    );
};

export default Home;
