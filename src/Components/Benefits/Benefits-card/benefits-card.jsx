import React from "react";
import '../benefits.css';

export function BenefitsCard (props) {
	return(
		<div class="benefits__card">
				<div class="benefits__card-pic">
					<img src={props.imageSrc} alt={props.cardTitle} class="benefits__card-thumb"/>
				</div>
				<h3 class="benefits__card-title">
					{props.cardTitle}
				</h3>
				<p class="benefits__card-desc">
					{props.cardDesc}
				</p>
				<a href={props.cardLink} class="benefits__card-more">
					LEARN MORE
				</a>
			</div>	
	);
} 