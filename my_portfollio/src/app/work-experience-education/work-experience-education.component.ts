import { Component } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { EducationComponent } from "../education/education.component";


@Component({
  selector: 'app-work-experience-education',
  standalone: true,
  imports: [MatGridListModule, EducationComponent],
  templateUrl: './work-experience-education.component.html',
  styleUrls: ['./work-experience-education.component.css']
})
export class WorkExperienceEducationComponent {

}
