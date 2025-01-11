import { Component, OnInit, inject } from '@angular/core';
import { TitleComponent } from '@shared/components/title/title.component';

@Component({
  selector: 'app-skills',
  imports: [TitleComponent],
  standalone: true,
  template: `
    <section id="skills">
      <app-title>Skills</app-title>
      <ul class="mt-10 flex flex-wrap justify-center gap-3">
        @for (skill of skills; track $index) {
          <li
            class="select-none rounded-md border border-neutral-600 px-2 py-1 text-base font-semibold text-neutral-400 transition-all hover:scale-105 hover:text-cyan-500"
          >
            {{ skill }}
          </li>
        }
      </ul>
    </section>
  `,
})
export class SkillsComponent {
  skills: string[] = [
    "Angular",
    "JavaScript",
    "TypeScript",
    "C#",
    "ASP.NET Core",
    "SignalR",
    "RxJS",
    "Firebase",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Bootstrap",
    "Angular Material",
    "Node.js",
    "SQL",
    "Entity Framework Core",
    "Git",
    "Netlify",
    "API Development"
  ]
}
