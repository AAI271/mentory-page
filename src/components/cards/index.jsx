import React from 'react';
import "./style.css";
import CoinsIcon from "../../assets/coins.png"
import NetworkIcon from "../../assets/network.png"
import ProfiIcon from "../../assets/profi.png"
import RewardIcon from "../../assets/reward.png"
import GameIcon from "../../assets/game.png"
import HundredIcon from "../../assets/100.png"

const Cards = () => {
    const cards = [
        {
            image:NetworkIcon,
            title:"Нетворкинг",
            description:"Попадешь в закрытые чаты где ты сможешь обмениваться опытом и знаниями",
        },
        {
            image:GameIcon,
            title:"Геймификация",
            description:"За каждое выполнение задач студенты начисляются баллы",
        },
        {
            image:HundredIcon,
            title:"100% практики",
            description:"максимум проектного обучения и минимум теории",
        },
        {
            image:ProfiIcon,
            title:"Актуальность и экспертность",
            description:"Наши преподаватели - профессионалы своего дела! Помогут прийти к результату",
        },
        {
            image:CoinsIcon,
            title:"Возможность зарабатывать",
            description:"На экзаменах будут реальные заказы за решения которых ты сможешь заработать!",
        },
        {
            image:RewardIcon,
            title:"Результат",
            description:"Mentory гарантирует тебе после обучения стажировку у наших партнеров",
        },
    ]
    return (
        <div className="cards marginX">
            <h3>Обучения с реальными возможностями</h3>
            <div className="cards__container">
                {cards.map(card => (
                    <div key={card.title} className="cards__item">
                        <img width="100" src={card.image} alt={card.image+""}/>
                        <h3>{card.title}</h3>
                        <p>{card.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cards;