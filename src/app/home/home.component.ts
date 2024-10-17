import { Component } from '@angular/core';
import {ChatComponent} from "../chat/chat.component";
import {AnswerQuestionComponent} from "../answer-question/answer-question.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ChatComponent,
    AnswerQuestionComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
