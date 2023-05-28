import {Component, Input, OnInit} from '@angular/core';
import {faArrowDown} from "@fortawesome/free-solid-svg-icons/faArrowDown";

@Component({
	selector: 'app-big-card',
	templateUrl: './big-card.component.html',
	styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {

	@Input()
	imageBackground: string = 'https://github.com/lipscheech/images-marketplace/blob/main/pexels-boluwatife-thesalt-2562498.jpg?raw=true';

	faArrowCircleDown = faArrowDown;

	bigCardStyle = {
		'background-image': `url(${this.imageBackground})`,
		'background-size': 'cover',
		'background-position': 'center',
		'background-repeat': 'no-repeat'
	}

	constructor() { }

	ngOnInit(): void {
	}
}
