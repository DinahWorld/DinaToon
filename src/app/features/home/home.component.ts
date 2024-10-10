import {Component, ElementRef, ViewChild} from '@angular/core';
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
import {DinatoonListComponent} from "../dinatoon-list/dinatoon-list.component";
import KeenSlider, {KeenSliderInstance} from "keen-slider";
import {NgForOf, NgStyle} from "@angular/common";


@Component({
    selector: 'app-dinatoon',
    templateUrl: 'home.component.html',
    standalone: true,
    imports: [
        MatGridList,
        MatGridTile,
        DinatoonListComponent,
        NgStyle,
        NgForOf
    ],
    styleUrls: [
        'home.component.scss',
        "../../../../node_modules/keen-slider/keen-slider.min.css",
    ]
})

export class HomeComponent {
    @ViewChild("sliderRefHome") sliderRef: ElementRef<HTMLElement>;
    slider: KeenSliderInstance | null = null;
    username: string = "Dinath";
    savedDinatoons = [
        {
            title: 'Solo Leveling',
            image: 'https://www.recyclivre.com/media/cache/sylius_shop_product_original/bf/b8/d9e4d5d7aad9fc70646639360f24.jpg'
        },
        {
            title: 'Tower of God',
            image: 'https://m.media-amazon.com/images/M/MV5BZWQwZGY3MGItZjQ3OS00MzYxLTlmMWMtNjZiYTY2ZDk4ZjFhXkEyXkFqcGc@._V1_.jpg'
        },
        {
            title: 'The Beginning After The End',
            image: 'https://www.manga-news.com/public/images/series/The_Beginning_After_The_End_1_kbooks.webp'
        },
        {title: 'Hardcore Leveling Warrior', image: 'https://i.ebayimg.com/images/g/H4gAAOSwT31jEVCE/s-l1200.jpg'},
        {
            title: 'Omniscient Reader\'s Viewpoint',
            image: 'https://animotaku.fr/wp-content/uploads/2024/07/anime-omniscient-reader-visuel-1.jpg'
        },
        {title: 'God of Bath', image: 'https://i.mydramalist.com/PnXKwf.jpg'},
        {title: 'Viral Hit', image: 'https://i.ebayimg.com/images/g/~scAAOSwXSVhY5AD/s-l1200.jpg'},
        {
            title: 'Hive',
            image: 'https://i.namu.wiki/i/H5OYL4w15QsKH2tB7uwwIwQovHJ4HyJ9hzF-ktu_m_tTd3VBlUe-UYNVewirm53O6qru3gEOIe3Ekw8qwS1M9Q.webp'
        }
    ];
    currentlyReading = [
        {
            title: 'Solo Leveling',
            image: 'https://www.recyclivre.com/media/cache/sylius_shop_product_original/bf/b8/d9e4d5d7aad9fc70646639360f24.jpg'
        },
        {title: 'Viral Hit', image: 'https://i.ebayimg.com/images/g/~scAAOSwXSVhY5AD/s-l1200.jpg'},
        {
            title: 'Hive',
            image: 'https://i.namu.wiki/i/H5OYL4w15QsKH2tB7uwwIwQovHJ4HyJ9hzF-ktu_m_tTd3VBlUe-UYNVewirm53O6qru3gEOIe3Ekw8qwS1M9Q.webp'
        }
    ];
    completedDinatoons = [
        {title: 'Lookism', image: 'https://i.ebayimg.com/images/g/f9kAAOSwxIhjCXyc/s-l1200.jpg'},
        {title: 'God of Bath', image: 'https://i.mydramalist.com/PnXKwf.jpg'}
    ];
    lovedDinatoons = [
        {
            title: 'Solo Leveling',
            image: 'https://www.recyclivre.com/media/cache/sylius_shop_product_original/bf/b8/d9e4d5d7aad9fc70646639360f24.jpg'
        },
        {
            title: 'Omniscient Reader\'s Viewpoint',
            image: 'https://animotaku.fr/wp-content/uploads/2024/07/anime-omniscient-reader-visuel-1.jpg'
        },
        {title: 'Hardcore Leveling Warrior', image: 'https://i.ebayimg.com/images/g/H4gAAOSwT31jEVCE/s-l1200.jpg'},
        {title: 'Lookism', image: 'https://i.ebayimg.com/images/g/f9kAAOSwxIhjCXyc/s-l1200.jpg'},
    ];

    ngAfterViewInit() {
        if (typeof window !== 'undefined' && this.sliderRef?.nativeElement) {
            this.slider = new KeenSlider(
                this.sliderRef.nativeElement,
                {
                    loop: true,
                },
                [
                    (slider) => {
                        let timeout: string | number | NodeJS.Timeout | undefined;
                        let mouseOver = false

                        function clearNextTimeout() {
                            clearTimeout(timeout)
                        }

                        function nextTimeout() {
                            clearTimeout(timeout)
                            if (mouseOver) return
                            timeout = setTimeout(() => {
                                slider.next()
                            }, 10000)
                        }

                        slider.on("created", () => {
                            slider.container.addEventListener("mouseover", () => {
                                mouseOver = true
                                clearNextTimeout()
                            })
                            slider.container.addEventListener("mouseout", () => {
                                mouseOver = false
                                nextTimeout()
                            })
                            nextTimeout()
                        })
                        slider.on("dragStarted", clearNextTimeout)
                        slider.on("animationEnded", nextTimeout)
                        slider.on("updated", nextTimeout)
                    },
                ]
            )

        }
    }

    ngOnDestroy() {
        if (this.slider) this.slider.destroy();
    }

}