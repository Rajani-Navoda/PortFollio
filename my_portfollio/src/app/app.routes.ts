import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { ContactmeComponent } from './contactme/contactme.component';
import { EducationComponent } from './education/education.component';
import { WorkExperienceEducationComponent } from './work-experience-education/work-experience-education.component';
import { ErrorComponent } from './error/error.component';

export const routes: Routes = [
    {path:'', component:HomePageComponent},
    {path:'Home', component:HomePageComponent},
    {path:'aboutMe', component: AboutMeComponent},
    {path:'projects', component: ProjectsComponent},
    {path:'skills', component: SkillsComponent},
    {path:'certifications', component: CertificationsComponent},
    {path:'contactMe', component: ContactmeComponent},
    {path:'education', component: EducationComponent},
    {path:'workExperience', component: WorkExperienceEducationComponent},
    {path:'**',component:ErrorComponent}
];
