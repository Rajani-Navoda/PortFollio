import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
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

}
