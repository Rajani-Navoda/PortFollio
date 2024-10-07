import { Component, AfterViewInit, Inject, PLATFORM_ID, Injectable } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { DOCUMENT } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';
import { AboutMeComponent } from "../about-me/about-me.component";
import { WorkExperienceEducationComponent } from "../work-experience-education/work-experience-education.component";
import { SkillsComponent } from "../skills/skills.component";
import { ProjectsComponent } from "../projects/projects.component";
import { CertificationsComponent } from "../certifications/certifications.component";
import { ContactmeComponent } from "../contactme/contactme.component";
import { FooterComponent } from "../footer/footer.component";
import { EducationComponent } from "../education/education.component";

declare var anime: any;   

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [MatListModule, MatCardModule, MatIconModule, AboutMeComponent, WorkExperienceEducationComponent, SkillsComponent, ProjectsComponent, CertificationsComponent, ContactmeComponent, FooterComponent, EducationComponent],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})


export class HomePageComponent implements AfterViewInit{

  linkedIn : String = "https://www.linkedin.com/in/rajani-navoda/";
  gitHub : String = "https://github.com/Rajani-Navoda";
  hackerRank : String = "https://www.hackerrank.com/profile/rajani_edu123";
  leetCode : String = "https://leetcode.com/u/rajani_999/";
  faceBook : String = "https://www.facebook.com/rajani.navoda.988/";


  angular: String = "assets/tech/angular.png";
  spring : String = "assets/tech/spring.png";
  html : String = "assets/tech/html.png";
  css : String = "assets/tech/css.png";
  js: String = "assets/tech/JS.png";
  java  :String = "assets/tech/java.png";
  linux : String = "assets/tech/linux.png";
  react : String = "assets/tech/react.png";
  node : String = "assets/tech/node.png";
  mySQL : String = "assets/tech/mmysql.png";
  git: String = "assets/tech/git.png";
  aws : String = "assets/tech/aws.png";

  rel : String = "noopener noreferrer";



  constructor(@Inject(DOCUMENT) private document: Document, @Inject(PLATFORM_ID) private platformId: Object) {}
 

  ngAfterViewInit(): void {

    if (isPlatformBrowser(this.platformId)) {
      let textWrapper = this.document.querySelector('.c2 .letters') as HTMLElement | null;
      if (textWrapper && textWrapper.textContent) {
        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter' style='display:inline-block;'>$&</span>");
      }
  
    anime.timeline({loop: true})
      .add({
        targets: '.c2 .line',
        scaleY: [0, 1],
        opacity: [0.5, 1],
        easing: "easeOutExpo",
        duration: 700
      })
      .add({
        targets: '.c2 .line',
        translateX: [0, textWrapper ? textWrapper.getBoundingClientRect().width + 10 : 0],
        easing: "easeOutExpo",
        duration: 700,
        delay: 100
      })
      .add({
        targets: '.c2 .letter',
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 600,
        offset: '-=775',
        delay: (el: HTMLElement, i: number) => 34 * (i + 1)
      })
      .add({
        targets: '.c2',
        opacity: 0,
        duration: 100,
        easing: "easeOutExpo",
        delay: 1000
      });
  } 
}
}
