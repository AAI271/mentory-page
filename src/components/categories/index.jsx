import React from 'react';
import "./style.css";
import CategoryImage1 from "../../assets/categories/Group 2.svg"
import CategoryImage2 from "../../assets/categories/camera.svg"
import CategoryImage3 from "../../assets/categories/Group 5032.svg"
import CategoryImage4 from "../../assets/categories/Group 5036.svg"
import CategoryImage9 from "../../assets/categories/Group 5038.svg"
import CategoryImage5 from "../../assets/categories/Group 5048.svg"
import CategoryImage6 from "../../assets/categories/Group 5042.svg"
import CategoryImage7 from "../../assets/categories/Group 5044.svg"
import CategoryImage8 from "../../assets/categories/Group 5051.svg"

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
            image:CategoryImage9,
            title:"Data Science",
        },
        {
            image:CategoryImage6,
            title:"Filmmaking",
        },
        {
            image:CategoryImage2,
            title:"Photoshop",
        },
    ]
    return (
        <div className="categories marginX">
            <h3 className="categories__title">Categories</h3>
            <div className="categories__container">
                {categories.map((category,index) => (
                    <div key={category.title} className={`categories__item ${(index/3)%2===0?"down":""}`}>
                        <img width="100" src={category.image} alt={category.image+""}/>
                        <h3>{category.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Categories;
