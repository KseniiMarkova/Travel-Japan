import React from "react";
import '../top-places.css';

export function TopPlacesCard(props) {
	return (
		<div class="top__card">

			<div class="top__card-pic">
				<img src={props.imageSrc} alt= {props.imageAlt} class="top__card-thumb" />
				<div class="top__card-stats">
					<h3 class="top__card-title">
						{props.cardTitle}
					</h3>
					<div class="top__card-likes">
						<span class="top__card-likes-value">
							221
						</span>
					</div>
					<div class="top__card-comments">
						<span class="top__card-comments-value">
							50
						</span>
					</div>
				</div>
			</div>
			<p class="top__card-desc">
				{props.cardDesc}
			</p>
			<a href="" class="top__card-more">
				SEE MORE
			</a>
		</div>
	);
}