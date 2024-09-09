import {Component} from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatSliderModule } from '@angular/material/slider';

/**
 * @title Basic use of the tab group
 */
@Component({
  selector: 'app-cortina',
  templateUrl: 'cortina.component.html',
  standalone: true,
  imports: [MatTabsModule, MatProgressSpinnerModule, MatSliderModule],
})
export class TabGroupBasicExample {}
export class spinner {}