import { ElementRef, EventEmitter, Renderer2, NgZone, OnInit, OnDestroy } from '@angular/core';
import { Subject } from "rxjs/Subject";
import { Observable } from "rxjs/Observable";
export declare class ScrollerComponent implements OnInit, OnDestroy {
    private ngZone;
    private renderer;
    scrollbarV: boolean;
    scrollbarH: boolean;
    scrollHeight: number;
    scrollWidth: number;
    scroll: EventEmitter<any>;
    scrollYPos: number;
    scrollXPos: number;
    prevScrollYPos: number;
    prevScrollXPos: number;
    element: any;
    parentElement: any;
    onScrollListener: any;
    scrollEvent: Observable<any>;
    ngUnsubscribe: Subject<any>;
    constructor(ngZone: NgZone, element: ElementRef, renderer: Renderer2);
    ngOnInit(): void;
    ngOnDestroy(): void;
    setOffset(offsetY: number): void;
    onScrolled(event: MouseEvent): void;
    updateOffset(): void;
}
