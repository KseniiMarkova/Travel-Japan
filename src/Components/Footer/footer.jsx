import React from "react";
import './footer.css';
import OdigoLogoFooter from '../../img/svg/odigo-logo-footer.svg';
import { FooterMenu } from "./footer-menu";

export function FooterItemes(props) {
	return (
		<footer class="footer">
			<div class="wrapper">
				<div class="footer__item">
					<div class="footer__logo">
						<img src={OdigoLogoFooter} alt="Discover Amazing places in Japan" class="footer__logo-pic" />
					</div>

					<nav class="footer__nav">
						<FooterMenu
							footerTitle='Company'
							footerItemeOne='About'
							footerItemeTwo='Team'
							footerItemeTree='Careers'
							footerItemeFour='Privacy Policy'
						/>

						<FooterMenu
							footerTitle='Locations'
							footerItemeOne='Tokyo'
							footerItemeTwo='Kyoto'
							footerItemeTree='Osaka'
							footerItemeFour='Hokkaido'
						/>

						<FooterMenu
							footerTitle='Social Media'
							footerItemeOne='Facebook'
							footerItemeTwo='Twitter'
							footerItemeTree='Instagram'
							footerItemeFour='Youtube'
						/>
					</nav>
				</div>
			</div>
		</footer>
	);
}