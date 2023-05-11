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


const Categories = () => {
    const categories = [
        {
            image:CategoryImage1,
            title:"Programming",
        },
        {
            image:CategoryImage2,
            title:"Photo",
        },
        {
            image:CategoryImage3,
            title:"Management",
        },
        {
            image:CategoryImage4,
            title:"Design",
        },
        {
            image:CategoryImage5,
            title:"Game Development",
        },
        {
            image:CategoryImage6,
            title:"Movies & Music",
        },
        {
            image:CategoryImage7,
            title:"Marketing",
        },
        {
            image:CategoryImage8,
            title:"Finance",
        },
        {
            image:CategoryImage9,
            title:"Analytics",
        },
        {
            image:CategoryImage10,
            title:"Data Science",
        },
        {
            image:CategoryImage11,
            title:"Filmmaking",
        },
        {
            image:CategoryImage12,
            title:"Photoshop",
        }
    ]
    return (
        <div className="categories marginX">
            <h3 className="categories__title">Categories</h3>
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
