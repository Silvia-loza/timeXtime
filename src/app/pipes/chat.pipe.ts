import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'chat'
})
export class ChatPipe implements PipeTransform {

  transform(text: String){
    if (text.includes("Jorgerod25")) {
      
      var str = text.replace(/Jorgerod25/g, "<span style='font-weight: bold'>$&</span>");
      return str;
      
    } else {
      return text;
    }
  }

}
