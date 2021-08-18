import React, { useEffect } from "react";
import './header.css';
import OdigoLogo from '../../img/svg/odigo-logo.svg';

export function HeaderItemes(props) {
	
	useEffect(() => {
		const script = document.createElement('script');
		script.src = './main.js';
		document.body.appendChild(script);
	}); 
	
	return (
		<header class="header">
			<div class="wrapper">
				<div class="header__wrapper">
					<div class="header__logo">
						<a href="/" class="header__logo-link">
							<img src={OdigoLogo} alt="Discover Amazing places in Japan" class="header__logo-pic" />
						</a>
					</div>

					<nav class="header__nav">
						<ul class="header__list">
							<li class="header__item">
								<a href="#articles" class="header__link js-scroll">Articles</a>
							</li>
							<li class="header__item">
								<a href="#locations" class="header__link js-scroll">Locations</a>
							</li>
							<li class="header__item">
								<a href="#videos" class="header__link js-scroll">Videos</a>
							</li>
							<li class="header__item">
								<a href="#sing-in" class="header__link js-scroll">Sign in</a>
							</li>
						</ul>
						<div class="header__nav-close">
							<span class="header__nav-close-line"></span>
							<span class="header__nav-close-line"></span>
						</div>
					</nav>

					<div class="header__burger burger">
						<span class="burger__line burger__line_first"></span>
						<span class="burger__line burger__line_second"></span>
						<span class="burger__line burger__line_third"></span>
					</div>
				</div>
			</div>
		</header>
	);
}