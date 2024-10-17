import {Component, inject, signal} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {OpenAIResponse, OpenAiService} from "../open-ai.service";
import {MarkdownModule} from "ngx-markdown";

@Component({
  selector: 'app-answer-question',
  standalone: true,
  imports: [FormsModule, MarkdownModule],
  templateUrl: './answer-question.component.html',
  styleUrl: './answer-question.component.css'
})
export class AnswerQuestionComponent {
  question = signal('');
  private readonly openAiService = inject(OpenAiService);

  async answerQuestion() {
    await this.openAiService.answerQuestion(this.question());
  }
}
