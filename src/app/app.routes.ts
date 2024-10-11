import {Routes} from '@angular/router';
import {AnswerQuestionComponent} from "./answer-question/answer-question.component";
import {HomeComponent} from "./home/home.component";
import {SetSystemPromptComponent} from "./set-system-prompt/set-system-prompt.component";

export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'system-prompt', component: SetSystemPromptComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}];
