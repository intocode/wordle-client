export interface AttemptLetterInterface extends Array<[string, number]> {}

/**
 * Стейт игры в редаксе
 */
export interface GameStateInterface {
  // сообщение для вывода в процессе игры
  info: string | null;

  // флаг для текущих запросов
  requesting: boolean;

  // максимальное количество попыток для отгадывания слова
  maxAttemptsCount: number;

  // длина слова
  wordLength: number;

  // совершенные попытки, массив из слов
  attempts: string[];

  // схема отгаданных букв
  letters: AttemptLetterInterface;

  // текущее набираемое слово
  typingWord: string;

  // количество отгаданных слов в рамках токена
  record: number;

  // отгадано ли последнее слово, если true, то будет видно модальное окно
  wordGuessed: boolean;

  // становится true при истечении попыток
  gameOver: boolean;
}
