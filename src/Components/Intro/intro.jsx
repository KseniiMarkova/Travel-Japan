import React from "react";
import './intro.css';

export function IntroBody(props) {
	return (
		<div class="intro" id="sing-in">
			<div class="wrapper">
				<h1 class="intro__title">
					Discover Amazing places in Japan
				</h1>
				<p class="intro__subtitle">
					Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over. Being gorgeous with belly side up i could pee on this if i had the energy but under the bed, for attack the child, open the door,
				</p>
				<form class="search-form">
					<fieldset class="search-form__wrap">
						<p class="search-form__info">
							<input type="text" name="user-like-to-do" class="search-form__field" placeholder="What would you like to do?" />
							<input type="text" name="user-like-to-go" class="search-form__field" placeholder="Where would you like to go?" />
							<button type="submit" class="search-form__submite">search</button>
						</p>
					</fieldset>
				</form>
			</div>
		</div>
	);
}