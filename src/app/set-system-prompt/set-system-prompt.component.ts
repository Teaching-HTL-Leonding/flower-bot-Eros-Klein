import {Component, inject, signal} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {OpenAiService} from "../open-ai.service";

@Component({
  selector: 'app-set-system-prompt',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './set-system-prompt.component.html',
  styleUrl: './set-system-prompt.component.css'
})
export class SetSystemPromptComponent {

  prompt = signal("")

  didWork = signal(false)

  openAiService = inject(OpenAiService)

  public setPrompt() {
    this.openAiService.setPrompt(this.prompt());
    this.didWork.set(true);
  }

}
