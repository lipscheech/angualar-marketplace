import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {faArrowDown} from "@fortawesome/free-solid-svg-icons";
import {Styles} from "@fortawesome/fontawesome-svg-core";

@Component({
	selector: 'app-big-card',
	templateUrl: './big-card.component.html',
	styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {

	@Input()
	imageBackground: string = 'https://github.com/lipscheech/images-marketplace/blob/main/pexels-boluwatife-thesalt-2562498.jpg?raw=true';
	@Input()
	buttonText: string = 'learn more';

	@Input()
	buttonVisible: boolean = true;

	@Input()
	iconButton = faArrowDown;

	@Input()
	faStyle: Styles = {
		'width': '1.4em'
	}

	@Output()
	eventButton: EventEmitter<any> = new EventEmitter<any>();

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
