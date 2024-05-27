export interface Pot {
  id: string;
  active: boolean;
}

export interface LeafGrowState {
  pots: Pot[];
  isLoading: boolean;
  error: string | null;
  isUserLoggedIn: boolean;
}
