import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'capitalize' })
export class CapitalizePipe implements PipeTransform {
  transform(str: string): string {
      let capitalizeStr = "";
      const dupStr = str.trim();
      const splitedStr = dupStr.split(" ");
    
      splitedStr.forEach(word => {
        capitalizeStr+= this.capitalizeWord(word);
        capitalizeStr+= " ";
      })
      
      return capitalizeStr.trim();
  }

  private capitalizeWord(word: string) {
      let resWord = "";

      if(word) {
        resWord = word.trim();
        resWord = resWord.charAt(0).toUpperCase() + resWord.substr(1).toLowerCase();        
      }

      return resWord;
  }
}