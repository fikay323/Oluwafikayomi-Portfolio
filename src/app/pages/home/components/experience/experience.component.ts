import { Component, OnInit, inject } from '@angular/core';
import { Experience } from 'src/app/models/experience.interface';
import { ExperienceCardComponent } from '../experience-card/experience-card.component';
import { TitleComponent } from '@shared/components/title/title.component';
import { MainService } from '@shared/services/main.service';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [ExperienceCardComponent, TitleComponent],
  template: `
    <section id="experience">
      <app-title>Experience</app-title>
      <ul class="mt-10 flex flex-col gap-3">
        @for (experience of experiences; track $index) {
          <li>
            <app-experience-card [experience]="experience" />
          </li>
        }
      </ul>
  `,
})
export class ExperienceComponent {
  private mainService = inject(MainService);
  experiences: Experience[] = [
    {
      "company": "DTT",
      "location": "Lagos, Nigeria",
      "description": "Spearheaded the development of scalable and interactive web applications using Angular and Tailwind CSS. Collaborated with UX/UI designers to implement designs that elevated user experience. Integrated real-time data updates using Firebase, ensuring seamless functionality. Provided ongoing application maintenance and optimization for improved performance and user satisfaction. Worked within an Agile environment, contributing to project milestones and delivery.",
      "position": "Front End Developer",
      "startDate": "2024",
      "endDate": "Present",
      "remote": true,
      "highlights": []
    },
    {
      "company": "Center for Developing Skills and Technology(CEST)",
      "location": "Oyo, Nigeria",
      "description": "Contributed to the development of dynamic and responsive web applications, leveraging HTML, CSS, and JavaScript to enhance functionality and user engagement. Played an active role in optimizing website performance, improving load times by 20%. Supported API integrations and debugging processes while maintaining a focus on clean and efficient code.",
      "position": "Front End Developer Intern",
      "startDate": "2023",
      "endDate": "2024",
      "remote": true,
      "highlights": []
    }
  ];
}
