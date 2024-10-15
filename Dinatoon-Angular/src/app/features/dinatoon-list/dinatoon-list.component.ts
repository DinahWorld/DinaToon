import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import KeenSlider, {KeenSliderInstance} from "keen-slider";
import {NgForOf, NgStyle} from "@angular/common";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
    selector: 'dinatoon-list',
    standalone: true,
    imports: [
        NgStyle,
        NgForOf,
        RouterLink, RouterLinkActive
    ],
    templateUrl: './dinatoon-list.component.html',
    styleUrls: [
        './dinatoon-list.component.scss',
        "../../../../node_modules/keen-slider/keen-slider.min.css",
    ]
})
export class DinatoonListComponent {

    @ViewChild("sliderRef") sliderRef: ElementRef<HTMLElement>;
    slider: KeenSliderInstance | null = null;
    @Input()
    dinatoons: {
        id: number | string,
        title: string,
        image: string,
        genre?: string,
        actualChapter?: string,
        chapterTotal?: string
    }[] = [];

    ngAfterViewInit() {
        if (typeof window !== 'undefined' && this.sliderRef?.nativeElement) {
            this.slider = new KeenSlider(this.sliderRef.nativeElement, {
                slides: {
                    perView: 4,
                    spacing: 15,
                },
                breakpoints: {
                    "(min-width: 1200px)": {
                        slides: {perView: 6.5, spacing: 15},
                    },
                    "(max-width: 900px)": {
                        slides: {perView: 3.5, spacing: 15},
                    },
                    "(max-width: 700px)": {
                        slides: {perView: 2.5, spacing: 15},
                    },
                    "(max-width: 500px)": {
                        slides: {perView: 2.2, spacing: 15},
                    },
                    "(max-width: 400px)": {
                        slides: {perView: 1.5, spacing: 15},
                    }
                },
            });
        }
    }

    ngOnDestroy() {
        if (this.slider) this.slider.destroy();
    }
}