import { Component } from '@angular/core';
import { Experience } from 'src/app/models/experience.interface';
import { ExperienceCardComponent } from '../experience-card/experience-card.component';
import { TitleComponent } from '@shared/components/title/title.component';

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
  experiences: Experience[] = [
    {
      "company": "Twikkie",
      "location": "Gloucester, UK",
      "description": "Led the design and implementation of a dynamic Angular-based calendar booking system featuring real-time synchronization and a custom RRULE-driven event recurrence engine; enhanced cross-device scheduling accuracy, improved user efficiency by 30%, and ensured system scalability and maintainability within an Agile CI/CD environment.",
      "position": "Associate Front End Developer",
      "startDate": "2025",
      "endDate": "Present",
      "remote": true,
      "highlights": []
    },
    {
      "company": "DTT",
      "location": "Lagos, Nigeria",
      "description": "Spearheaded front-end development of scalable Angular applications, delivering major features ahead of schedule and enhancing UI consistency with a custom Tailwind CSS component library; integrated Firebase for real-time data updates, reducing latency by 40%, and collaborated with back-end teams to optimize API efficiency and data handling across platforms.",
      "position": "Front End Developer",
      "startDate": "2024",
      "endDate": "2025",
      "remote": true,
      "highlights": []
    },
    {
      "company": "Center for Developing Skills and Technology (CEST)",
      "location": "Oyo, Nigeria",
      "description": "Redeveloped static websites into fully responsive, mobile-first interfaces using HTML, JavaScript, and Tailwind CSS, improving mobile usability scores by 45%; led the transition from legacy styles to a modern utility-first framework, resolving cross-browser inconsistencies and significantly enhancing front-end maintainability and performance.",
      "position": "Front End Developer Intern",
      "startDate": "2023",
      "endDate": "2024",
      "remote": true,
      "highlights": []
    },
    {
      "company": "Freelance Developer",
      "location": "Oyo, Nigeria",
      "description": "Delivered 10+ full-stack web solutions using Angular and ASP.NET Core for clients across e-commerce, education, and logistics; engineered reusable UI modules, implemented responsive and accessible designs, and provided end-to-end support—achieving 90%+ client satisfaction and maintaining a 99% uptime SLA with rapid issue resolution.",
      "position": "Freelance Developer",
      "startDate": "2021",
      "endDate": "2023",
      "remote": true,
      "highlights": []
    }
  ];
}
