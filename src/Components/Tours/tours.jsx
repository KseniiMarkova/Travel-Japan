import React from "react";
import './tours.css';
import {TourInfo} from './tourInfo';
import Prefecture from '../../img/prefecture.jpg';
import Neighborhood from '../../img/neighborhood.jpg';

export function ToursBody(props) {
	return (
		<div class="tours">
			<div class="wrapper-full">

				<div class="tours__tour tour">
					<div class="tour__pic">
						<img src= {Prefecture} alt="Prefecture in Focus: Tottori" class="tour_thumb"/>
					</div>
					<TourInfo
						TourInfoTitle = 'Prefecture in Focus: Tottori'
						TourInfoDesc = "Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over. Being gorgeous with belly side up i could pee on this if i had the energy but under the bed, for attack the child, open the door,"
					/>
				</div>

				<div class="tours__tour tour">
					<TourInfo
					TourInfoTitle = 'Featured Neighborhood: Kyoto’s Arashiyama'
					TourInfoDesc = "Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over. Being gorgeous with belly side up i could pee on this if i had the energy but under the bed, for attack the child, open the door,"
					/>
					<div class="tour__pic tour__pic_mob-first">
						<img src= {Neighborhood} alt="Featured Neighborhood: Kyoto’s Arashiyama" class="tour_thumb"/>
					</div>					
				</div>

			</div>
		</div>
	);
}