import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-picture',
  templateUrl: './text-picture.component.html',
  styleUrl: './text-picture.component.scss'
})
export class TextPictureComponent {
  @Input() layout: number = 1;
  @Input() picture: string = 'empty.png';
  @Input() title: string = '';
  @Input() text: string = '';

  picUrl!: string;

  ngOnInit() {
    this.picUrl = `../../../../assets/${this.picture}`;
  }

}
