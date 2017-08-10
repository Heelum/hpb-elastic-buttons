import { Component, OnInit, Input, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

declare var Snap: any;
declare var mina: any;
declare var SVGButton: any;

@Component({
	selector: 'elastic-button',
	templateUrl: './button.component.html',
	styleUrls: ['./button.component.scss']
})


export class ButtonComponent implements AfterViewInit {


	_btnText: string;
	_btnClass: string;
	_mainColor: string;
	
	@Input ()
	set btnText(text: string){
		this._btnText = text;
	}
	get btnText() { return this._btnText; }

	@Input ()
	set btnClass(newClass: string){
		this._btnClass = newClass;
	}
	get btnClass() { return this._btnClass; }

	@Input ()
	set mainColor(mainColor: string){
		this._mainColor = mainColor;
	}
	get mainColor() { return this._mainColor; }

	@ViewChild('myInput') input: ElementRef;


	private pathEl: any;
	private paths: any;

	private mouseDownActive = false;


	constructor() { }

	ngAfterViewInit(){
		
		let shapeEl = this.input.nativeElement.querySelector( 'span.morph-shape' );

		let s = Snap( shapeEl.querySelector( 'svg' ) );
		this.pathEl = s.select( 'path' );
		this.paths = {
			reset : this.pathEl.attr( 'd' ),
			active : shapeEl.getAttribute( 'data-morph-active' ),
			over: shapeEl.getAttribute( 'data-morph-hover' ),
		};

	}

	ngOnInit() {

		
	}

	mouseDown(){
		this.mouseDownActive = true;
		this.pathEl.stop().animate( { 'path' : this.paths.active }, 650, mina.elastic );
	}

	mouseUp(){
		if(this.mouseDownActive) {
			this.pathEl.stop().animate( { 'path' : this.paths.reset }, 850, mina.elastic );
			this.mouseDownActive = false;
		}
		
	}

	mouseOver(){
		this.mouseDownActive = true;
		this.pathEl.stop().animate( { 'path' : this.paths.over }, 650, mina.elastic );
	}

	

}
