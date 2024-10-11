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
  answer = signal('');

  private readonly openAiService = inject(OpenAiService);

  async answerQuestion() {
    const response :OpenAIResponse = await this.openAiService.answerQuestion(this.question());
    this.answer.set(response.choices.reverse()[0].message.content);
  }
}
