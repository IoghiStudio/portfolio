export interface Char {
  id: string;
  char: string;
}
export interface Word {
  id: string;
  chars: Char[];
};

export interface WordsLine {
  id: string;
  words: Word[];
};
