import React from "react";
import newsData from "../../assets/news.json";
import "./style.scss";
import { Card } from "./NewsCard";

const News = () => {
    console.log(newsData)
    return (
        <div className="news-block">
            {/* {newsData.map((el, i) => <Card key={i} description={el.description} name={el.name} pic={el.pic} />)} */}
            {/* {newsData.map((el, i) => <Card 
                key={i} 
                description={el.description} 
                name={el.name} 
                pic={el.pic} 
            />)} */}
            {newsData.map((el, i) => <Card 
                key={i} 
                {...el}
            />)}
        </div>
    )
}

export default News;