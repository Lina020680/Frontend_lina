export interface Pot {
  id: string;
  active: boolean;
}

export interface PotsState {
  pots: Pot[];
  isLoading: boolean;
  error: string | null;
}