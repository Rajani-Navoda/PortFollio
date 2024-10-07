import { Component } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';


@Component({
  selector: 'app-education',
  standalone: true,
  imports: [MatGridListModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {

}
