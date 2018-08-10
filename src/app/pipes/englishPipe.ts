import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'english' })
export class EnglishPipe implements PipeTransform {
  transform(str: string): string {
      let englishStr = "";
      const dupStr = str.trim();
     
      for(let i = 0; i < dupStr.length; i++) {
        const char = dupStr.charAt(i);

        if(this.isEnglishLetter(char) || char === " ") {
            englishStr+= char;
        } else {
            englishStr+= " ";
        }
    }
      
      return englishStr.trim();
  }

  private isEnglishLetter(char: string) {
      return (char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z');
  }
}