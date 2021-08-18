import React from "react";
import './videos.css';

export function VideosBody(props) {
	return(
		<div class="videos" id="videos">
		<div class="videos__wrapper">
			<div class="video__item"></div>
			<iframe class="video__element" src="https://www.youtube.com/embed/Gb0TQ7VeApY" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
		</div>
	</div>
	);
}