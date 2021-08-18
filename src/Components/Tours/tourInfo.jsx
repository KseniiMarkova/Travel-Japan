import React from "react";

export function TourInfo(props) {
	return (
		<div class="tour__info">
			<h3 class="tour__title">
				{props.TourInfoTitle}
			</h3>
			<p class="tour__desc">
				{props.TourInfoDesc}	
			</p>
			<a href="#!" class="tour__link">
				VIEW PREFECTURE
			</a>
		</div>
	);
}