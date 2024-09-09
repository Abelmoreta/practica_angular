import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ToolbarOverviewExample } from './toolbar/toolbar.component';
import { TabGroupBasicExample } from './cortina/cortina.component';
import { SortOverviewExample } from './chart/chart.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { FormFieldOverviewExample } from './form/form.component';
import {MatFormFieldModule} from '@angular/material/form-field'
import { MatSliderModule } from '@angular/material/slider';
import { Slide } from "./slide/slide.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatIconModule, ToolbarOverviewExample, TabGroupBasicExample, SortOverviewExample,
    MatProgressSpinnerModule, MatToolbarModule, MatButtonModule, FormFieldOverviewExample, MatFormFieldModule, MatSliderModule, Slide],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  
})

export class AppComponent {
  title = 'p01';
}
