import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {firstValueFrom} from "rxjs";

export type OpenAIResponse = {
  choices: {
    message: Message
  }[];
  usage: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  }
}

export type Message = {
  role: string;
  content: string;
}

@Injectable({
  providedIn: 'root'
})
export class OpenAiService {
  private httpClient = inject(HttpClient);

  private pastMessages: Message[] = []

  constructor() {
    this.clearPastMessages();
  }

  public setPrompt(prompt:string){
    console.log(prompt);
    localStorage.setItem('prompt', prompt);
  }

  async answerQuestion(question: string) : Promise<OpenAIResponse>{
    this.pastMessages.push({role: 'user', content: question});
    const response:OpenAIResponse = await firstValueFrom(
      this.httpClient.post<OpenAIResponse>('http://localhost:3000/openai/deployments/gpt-4o-mini/chat/completions',{
        messages: this.pastMessages
      })
    )

    this.pastMessages.push(response.choices[0].message);

    return response;
  }

  public getPastMessages(): Message[] {
    return this.pastMessages;
  }

  public clearPastMessages(): void {
    this.pastMessages = [];

    if(localStorage.getItem("prompt")){
      this.pastMessages.push({role: 'system', content: localStorage.getItem("prompt")!});
    }
  }
}
