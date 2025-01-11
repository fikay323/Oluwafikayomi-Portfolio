import { Component, OnInit, inject } from '@angular/core';
import { Project } from 'src/app/models/project.interface';
import { ProjectComponent } from '../project/project.component';
import { TitleComponent } from '@shared/components/title/title.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectComponent, TitleComponent],
  template: `
    <section id="projects">
      <app-title>Projects</app-title>
      <ul class="mt-10 flex flex-col gap-3">
        @for (project of projects; track $index) {
          <li>
            <app-project [project]="project" />
          </li>
        }
      </ul>
    </section>
  `,
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      "name": "Chat App (Frontend)",
      "description": "Built a scalable and responsive real-time chat application frontend developed with Angular, featuring SignalR integration, responsive design, and secure authentication. Styled Tailwind CSS.",
      "repo": "https://github.com/fikay323/Chat-App-Client",
      "url": "https://chat-app-client-fikay323s-projects.vercel.app/",
      "tags": [
          "Angular",
          "SignalR",
          "RxJS",
          "TailwindCSS",
          "Tailwind CSS",
          "TypeScript",
      ]
    },  
    {
      "name": "Chat App (Backend)",
      "description": "Developed a real-time chat application backend built with ASP.NET Core and SignalR. Includes WebSocket functionality, secure APIs, and SQL Server integration for data management.",
      "repo": "https://github.com/fikay323/Chat-App-Server",
      "tags": [
        "ASP.NET Core",
        "SignalR",
        "Entity Framework Core",
        "API Development",
      ]
    },
    {
      "name": "Leadway Royals Clinic",
      "description": "Built a responsive clinic website built with Angular, featuring appointment booking, patient and doctor management, and a user-friendly dashboard. Optimized for scalability and accessibility.",
      "url": "https://task-manager-fikay323s-projects.vercel.app",
      "repo": "https://github.com/fikay323/leadway-royals-clinic",
      "tags": [
        "Angular",
        "TypeScript",
        "Firebase",
        "SCSS",
        "TailwindCSS",
      ]
    },  
    {
      "name": "Task Manager",
      "description": "A secure and responsive Task Manager application with Firebase for user authentication and data storage. Includes features like Sticky Notes and personalized tagging for streamlined task management.",
      "url": "https://task-manager-c8110.web.app",
      "repo": "https://github.com/fikay323/task-manager",
      "tags": [
        "Angular",
        "TypeScript",
        "TailwindCSS",
        "Firebase",
        "Authentication",
      ]
    },
    {
        "name": "The Italian Restaurant",
        "description": "A front-end-only responsive restaurant website featuring store hours, order online, and contact pages. Deployed using Netlify.",
        "url": "https://the-italian-restaurant.netlify.app/",
        "repo": "https://github.com/fikay323/TheItalianRestaurant",
        "tags": [
            "HTML",
            "CSS",
            "Responsive Design",
            "Netlify"
        ]
    },
    {
        "name": "Tic-Tac-Toe Game",
        "description": "A minimalistic tic-tac-toe game with interactive functionality and responsive design. Built using HTML, CSS, and JavaScript.",
        "url": "https://fikay323.github.io/tic-tac-toe-game/",
        "repo": "https://github.com/fikay323/tic-tac-toe-game",
        "tags": [
            "HTML",
            "JavaScript",
            "CSS",
            "JavaScript",
            "Game Development"
        ]
    },
    {
        "name": "Calculator",
        "description": "A calculator capable of performing arithmetic and trigonometric calculations with theme-switching options. Built using HTML, CSS, and CSS Grid for responsiveness.",
        "url": "https://fikay323.github.io/SImple-calculator/",
        "repo": "https://github.com/fikay323/SImple-calculator",
        "tags": [
            "HTML",
            "CSS",
            "JavaScript",
            "CSS Grid",
            "Calculator"
        ]
    }
  ]
}
