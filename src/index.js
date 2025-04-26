import React from "react";
import { createRoot } from "react-dom/client";

import {daysOfWeek} from "./fun/constants";
import {getRandom} from "./fun/functions";

import "./index.css"

const root = createRoot(document.getElementById("root"));

const colors = ["red", "green", "green", "blue"]
// const colors = [<li>red</li>, <li>green</li>, <li>blue</li>]

const today = new Date();
const result = daysOfWeek[today.getDay()].name
console.log(result)

const blockStyle = {
	backgroundColor: "orange",
	padding: "30px 100px"
}

root.render(
	<>
		<h1 title="Это основное приветствие">
			Сегодня&nbsp;-&nbsp;
			{/* <span className="red">{result}</span> */}
			<span className={colors[getRandom(colors.length)]}>{result}</span>
			!
		</h1>
		<div style={blockStyle}>
			<h2 className="caption">Все дни недели:</h2>
			<ul style={{
				listStyleType: "square",
				paddingLeft: 10
			}}>
				{/* {daysOfWeek.map(el => <li>{el.shortName}</li>)} */}
				{daysOfWeek.filter((el, i) => i !== 0).map((el, i) => <li key={i}>{el.shortName}</li>)}
				<li>{daysOfWeek.shift().shortName}</li>
			</ul>
		</div>
	</>
)

console.log(daysOfWeek)
/*
	tag.title = "hello"
	tag.className = "card" // class || for => className || htmlFor
	tag.style.background = "green"


	`123${n}456`
	*/