export interface IPokemon {
  avatar: string;
  color: string;
  id: number;
  skills: {
    attack: number;
    mobility: number;
    punctuation: number;
    resistance: number;
    support: number;
  };
}
