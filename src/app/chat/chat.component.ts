import {Component, inject, signal} from '@angular/core';
import {OpenAiService} from "../open-ai.service";
import {MarkdownComponent} from "ngx-markdown";

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [
    MarkdownComponent
  ],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {
  openAiService = inject(OpenAiService);

  messages = signal(this.openAiService.getPastMessages())


}
