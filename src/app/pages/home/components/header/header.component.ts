import { Component } from '@angular/core';
import { FileIconComponent } from '@shared/components/file-icon/file-icon.component';
import { GithubIconComponent } from '@shared/components/github-icon/github-icon.component';
import { LinkButtonComponent } from '@shared/components/link-button/link-button.component';
import { LinkedinIconComponent } from '@shared/components/linkedin-icon/linkedin-icon.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    LinkedinIconComponent,
    GithubIconComponent,
    LinkButtonComponent,
    FileIconComponent,
  ],
  template: `
    <section class="flex flex-col justify-between gap-5">
      <img
        src="./assets/profile.png"
        alt="Oluwafikayomi profile image"
        width="150"
        height="150"
        class="rounded-full border-4 border-cyan-500"
      />
      <div class="flex flex-col gap-2">
        <div>
          <span class="text-sm font-semibold text-neutral-400 md:text-base"
            >Hey! I'm</span
          >
          <h1 class="text-5xl font-semibold md:text-6xl">
            Oluwafikayomi Fagbenro
          </h1>
        </div>
        <h2 class="text-lg text-cyan-500 md:text-xl">
          Frontend Software Engineer
        </h2>
        <p class="text-sm font-semibold text-neutral-400 md:text-base">
          Web Developer & Design Enthusiast | Creating Elegant and Functional
          Online Spaces | Transforming Ideas into Interactive Experiences |
          Crafting Code with Creativity and Minimalism.
        </p>
      </div>
      <div class="flex gap-3">
        <app-link-button
          href="https://www.linkedin.com/in/oluwafikayomi-fagbenro"
          title="Linkedin page"
        >
          <app-linkedin-icon class="h-5" />
        </app-link-button>
        <app-link-button
          href="https://github.com/fikay323"
          title="Github profile"
        >
          <app-github-icon class="h-5" />
        </app-link-button>
        <app-link-button href="https://drive.google.com/file/d/1bpCxoU4TdsQR1Iew0NgdvBjoZVqbwtam/view?usp=drive_link" title="Curriculim Vitae">
          <app-file-icon class="h-5 w-5" />
        </app-link-button>
      </div>
    </section>
  `,
})
export class HeaderComponent {
}
