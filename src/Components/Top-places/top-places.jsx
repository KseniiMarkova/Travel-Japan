import React from "react";
import './top-places.css';
import { TopPlacesCard } from "./Top-places-card/top-places-card";
import Nagoya from '../../img/top-pic-nagoya.jpg';
import Nigata from '../../img/top-pic-nigata.jpg';
import Osaka from '../../img/top-pic-osaka.jpg';
import Saitama from '../../img/top-pic-saitama.jpg';
import Ueno from '../../img/top-pic-ueno.jpg';
import Shibuya from '../../img/top-pic-shibuya.jpg';


export function TopPlacesBody(props) {
	return(
		<section class="top" id="locations">
			<div class="wrapper-full">
				<h2 class="top__title section-title">
					Today top places to visit
				</h2>

				<div class="top__cards">

					<TopPlacesCard
						imageSrc = {Nagoya}
						imageAlt = "NAGOYA"
						cardTitle = 'NAGOYA'
						cardDesc = "Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over. Being gorgeous with belly side up i could pee on this."
					/>

					<TopPlacesCard
						imageSrc = {Nigata}
						imageAlt = "NIIGATA"
						cardTitle = 'NIIGATA'
						cardDesc = "Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over. Being gorgeous with belly side up i could pee on this."
					/>

					<TopPlacesCard
						imageSrc = {Osaka}
						imageAlt = "OSAKA"
						cardTitle = 'OSAKA'
						cardDesc = "Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over. Being gorgeous with belly side up i could pee on this."
					/>

					<TopPlacesCard
						imageSrc = {Saitama}
						imageAlt = "SAITAMA"
						cardTitle = 'SAITAMA'
						cardDesc = "Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over. Being gorgeous with belly side up i could pee on this."
					/>

					<TopPlacesCard
						imageSrc = {Ueno}
						imageAlt = "UENO"
						cardTitle = 'UENO'
						cardDesc = "Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over. Being gorgeous with belly side up i could pee on this."
					/>

					<TopPlacesCard
						imageSrc = {Shibuya}
						imageAlt = "SHIBUYA"
						cardTitle = 'SHIBUYA'
						cardDesc = "Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over. Being gorgeous with belly side up i could pee on this."
					/>

				</div>
			</div>
		</section>
	);
}