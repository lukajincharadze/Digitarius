import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../core/translation.service';
import { Subscription } from 'rxjs';

import { HeaderCarouselComponent } from '../sharedComponents/header-carousel/header-carousel.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, HeaderCarouselComponent, FormsModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  langs: any = {};
  index: number = 0;

  subscription: Subscription = new Subscription();

  constructor(private translationService: TranslationService) {}

  gotoSection(frag: string) {
    document.getElementById(frag)?.scrollIntoView();
  }

  ngOnInit() {
    this.langs = this.translationService.langs;
    this.index = this.translationService.index;
    this.subscription.add(
      this.translationService.langStatus$.subscribe((res: any) => {
        this.index = res;
      })
    );
  }

  // clicked: number = 0;

  // clickMe() {
  //   this.clicked += 1;
  // }

  // contextMenuInfo: any = {
  //   pageX: 0,
  //   pageY: 0,
  //   willShowMenu: false,
  // };

  // willShowBlock: boolean = false;

  // toggleContextMenu(willShowBlock: boolean, event: MouseEvent) {
  //   this.contextMenuInfo.pageX = event.pageX;
  //   this.contextMenuInfo.pageY = event.pageY;

  //   this.contextMenuInfo.willShowMenu = willShowBlock;
  // }
}
