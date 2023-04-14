import React from 'react';
import About from "../../components/about";
import Carousel from "../../components/carousel";
import StepProcess from "../../components/step-process";
import Order from "../../components/order";
import StudentWorks from "../../components/studend-works";


const Home = () => {
    return (
        <main>
            <section id="about" className="marginX">
                <About/>
            </section>
            <section id="vacancy" className="marginX">
                <Carousel/>
            </section>
            <section id="roadmap">
                <StepProcess/>
            </section>
            <section id="order" className="marginX">
                <Order/>
            </section>
            <section id="student-works" className="marginX">
                <StudentWorks/>
            </section>
        </main>
    );
};

export default Home;
