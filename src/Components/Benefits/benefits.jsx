import React from "react";
import './benefits.css';
import {BenefitsCard} from './Benefits-card/benefits-card';
import imageCardOne from '../../img/svg/church-icon.svg';
import imageCardTwo from '../../img/svg/person-icon.svg';
import imageCardTree from '../../img/svg/building-icon.svg';

export function BenefitsBody(props) {
	return(
		<section class="benefits">
			<div class="benefits__wrap">
				<h2 class="benefits__title">
					Benefits of Odigo
				</h2>

				<div className="benefits__cards">
					<BenefitsCard
						imageSrc = {imageCardOne}
						cardTitle = 'Welcome to Odigo!'
						cardDesc = "Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over."
						cardLink = '#!'
					/>

					<BenefitsCard
						imageSrc = {imageCardTwo}
						cardTitle = 'Your Personal Japan Guide'
						cardDesc = "Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over."
						cardLink = '#!'
					/>

					<BenefitsCard
						imageSrc = {imageCardTree}
						cardTitle = 'Promoting Local Businesses'
						cardDesc = "Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over."
						cardLink = '#!'
					/>	
				</div>
			</div>
		</section>
	);
}