import React from "react";
import './footer.css';

export function FooterMenu(props) {
	return (
		<ul class="footer__menu">
			<li class="footer__menu-item">
				<h3 class="footer__menu-title">{props.footerTitle}</h3>
			</li>
			<li class="footer__menu-item">
				<a href="#!" class="footer__menu-link"> {props.footerItemeOne} </a>
			</li>
			<li class="footer__menu-item">
				<a href="#!" class="footer__menu-link">{props.footerItemeTwo}</a>
			</li>
			<li class="footer__menu-item">
				<a href="#!" class="footer__menu-link">{props.footerItemeTree}</a>
			</li>
			<li class="footer__menu-item">
				<a href="#!" class="footer__menu-link">{props.footerItemeFour}</a>
			</li>
		</ul>
	);
}