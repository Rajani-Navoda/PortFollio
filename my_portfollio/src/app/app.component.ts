import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { WorkExperienceEducationComponent } from "./work-experience-education/work-experience-education.component";
import { AboutMeComponent } from "./about-me/about-me.component";
import { ProjectsComponent } from "./projects/projects.component";
import { SkillsComponent } from "./skills/skills.component";
import { ContactmeComponent } from "./contactme/contactme.component";
import { FooterComponent } from "./footer/footer.component";
import { CertificationsComponent } from "./certifications/certifications.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent, HomePageComponent, WorkExperienceEducationComponent, AboutMeComponent, ProjectsComponent, SkillsComponent, ContactmeComponent, FooterComponent, CertificationsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfollio';
}
