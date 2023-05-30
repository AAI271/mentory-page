import React from 'react';
import "./style.css";
import CategoryImage1 from "../../assets/categories/devices.svg"
import CategoryImage2 from "../../assets/categories/camera.svg"
import CategoryImage3 from "../../assets/categories/notes edi.svg"
import CategoryImage4 from "../../assets/categories/edit rectangle.svg"
import CategoryImage5 from "../../assets/categories/Group.svg"
import CategoryImage6 from "../../assets/categories/film.svg"
import CategoryImage7 from "../../assets/categories/idea.svg"
import CategoryImage8 from "../../assets/categories/bank.svg"
import CategoryImage9 from "../../assets/categories/chart histogram.svg"
import CategoryImage10 from "../../assets/categories/pie.svg"
import CategoryImage11 from "../../assets/categories/filming.svg"
import CategoryImage12 from "../../assets/categories/focus.svg"
import {useTranslation} from "react-i18next";


const Categories = () => {
    const { t } = useTranslation();
    const categories = [
        {
            image:CategoryImage1,
            title:t("categories1"),
        },
        {
            image:CategoryImage4,
            title:t("categories4"),
        },
        {
            image:CategoryImage5,
            title:t("categories5"),
        },
        {
            image:CategoryImage7,
            title:t("categories7"),
        },
        {
            image:CategoryImage9,
            title:t("categories9"),
        },
        {
            image:CategoryImage10,
            title:t("categories10"),
        },
    ]
    return (
        <div className="categories marginX">
            <h3 className="categories__title">{t("categoriesTitle")}</h3>
            <div className="categories__container">
                {categories.map((category,index) => (
                    <div key={category.title} className={`categories__item ${(index/3)%2===0?"down":""}`}>
                        <img  src={category.image} alt={category.image+""}/>
                        <h3>{category.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Categories;
