import {Component} from '@angular/core';
import {MatSliderModule} from '@angular/material/slider';

/**
 * @title Basic slider
 */
@Component({
  selector: 'slide',
  templateUrl: 'slide.component.html',
  styleUrl: 'slide.component.css',
  standalone: true,
  imports: [MatSliderModule],
})
export class Slide {}

