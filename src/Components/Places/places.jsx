import React from "react";
import './places.css';
import MountFuji from '../../img/mount-fuji.jpg';
import Kyoto from '../../img/kyoto.jpg';
import Tokyo from '../../img/tokyo.jpg';
import Niigata from '../../img/niigata.jpg';
import Sapporo from '../../img/sapporo.jpg';

export function PlacesBody(props) {
	return (
		<section class="places" id="articles">
			<div class="wrapper-full">
				<div class="places__caption">
					<h2 class="places__title section-title">
						Get inspired for your next trip
					</h2>
					<a href="#!" class="places__view-all">VIEW ALL</a>
				</div>

				<div class="places__cards">

					<figure class="places__card places__card-size-lg">
						<img src= {MountFuji} alt="Mount Fuji" class="places__card-pic places__card-pic-size-lg"/>
							<figcaption class="places__card-title">
								Mount Fuji
							</figcaption>
							<a href="#!" class="places__card-link"></a>
					</figure>

						<figure class="places__card places__card-size-lg">
							<img src= {Kyoto} alt="Kyoto" class="places__card-pic places__card-pic-size-lg"/>
								<figcaption class="places__card-title">
									Kyoto
								</figcaption>
								<a href="#!" class="places__card-link"></a>
					</figure>

							<figure class="places__card places__card-size-sm">
								<img src= {Tokyo} alt="Tokyo" class="places__card-pic places__card-pic-size-sm"/>
									<figcaption class="places__card-title">
										Tokyo
									</figcaption>
									<a href="#!" class="places__card-link"></a>
					</figure>

								<figure class="places__card places__card-size-sm">
									<img src= {Niigata} alt="Niigata" class="places__card-pic places__card-pic-size-sm"/>
										<figcaption class="places__card-title">
											Niigata
										</figcaption>
										<a href="#!" class="places__card-link"></a>
					</figure>

									<figure class="places__card places__card-size-sm">
										<img src= {Sapporo} alt="Sapporo" class="places__card-pic places__card-pic-size-sm"/>
											<figcaption class="places__card-title">
												Sapporo
											</figcaption>
											<a href="#!" class="places__card-link"></a>
					</figure>
				</div>
			</div>
		</section>
	);
}