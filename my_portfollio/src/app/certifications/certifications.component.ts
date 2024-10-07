import { Component } from '@angular/core';


@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [],
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.css'
})
export class CertificationsComponent {

  activeTab = 'certifications'; // Default tab

    getTabClass(tab: string) {
        return this.activeTab === tab ? 'tab-pane active' : 'tab-pane';
    }
}
