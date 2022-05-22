export interface AttemptLetterInterface extends Array<[string, number]> {}

export interface GameStateInterface {
  info: string | null; // ?
  requesting: boolean;
  maxAttemptsCount: number;
  wordLength: number;
  attempts: string[];
  letters: AttemptLetterInterface;
  typingWord: string;
  record: number;
  wordGuessed: boolean;
}
