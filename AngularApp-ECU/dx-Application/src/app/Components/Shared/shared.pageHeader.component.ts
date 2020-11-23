import { Component, Input } from '@angular/core';

@Component({
  selector: 'page-header',
  templateUrl: 'shared.pageHeader.component.html',
  styleUrls: ['shared.pageHeader.component.css'],
})

export class SharedPageHeaderComponent {
  @Input() pageHeader: string;
}
