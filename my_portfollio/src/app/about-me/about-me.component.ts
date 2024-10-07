import { Component } from '@angular/core';
import { WorkExperienceEducationComponent } from "../work-experience-education/work-experience-education.component";
import { ProjectsComponent } from "../projects/projects.component";
import { EducationComponent } from "../education/education.component";
import { RouterModule } from '@angular/router';
import { SkillsComponent } from "../skills/skills.component";

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [WorkExperienceEducationComponent, ProjectsComponent, EducationComponent, RouterModule, SkillsComponent],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {
 

}
