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
          Angular Developer | TypeScript | ASP.NET Core | Firebase | Building Performant, Scalable Web Apps
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
        <app-link-button href="https://docs.google.com/document/d/1FIQTIlwBTA09WsrSqbu-fQr76lFdqkhS/edit?usp=drive_link&ouid=109514692278853681202&rtpof=true&sd=true" title="Curriculim Vitae">
          <app-file-icon class="h-5 w-5" />
        </app-link-button>
      </div>
    </section>
  `,
})
export class HeaderComponent {
}
