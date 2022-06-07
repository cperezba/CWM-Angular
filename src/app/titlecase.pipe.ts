import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titlecase'
})
export class TitlecasePipe implements PipeTransform {

  transform(title: string, ...args: unknown[]): unknown {
    if (!title)
      return null;

    let words = title.split(" ");
    for (var i = 0; i < words.length; i++) {
      let word = words[i];
      if (this.isPrepositions(word) && i != 0) {
        words[i] = word.toLowerCase() + " "
      }
      else {
        words[i] = this.makeCamelCase(word)
      }
    }
    return words.join(" ")
  }


  private isPrepositions(word: string): boolean {
    let prepositions = ["of",
      "the",
      "is"
    ];
    return prepositions.includes(word.toLowerCase());
  }

  private makeCamelCase(word: string): string {
    return word[0].toUpperCase() + word.substr(1).toLowerCase();
  }

}


