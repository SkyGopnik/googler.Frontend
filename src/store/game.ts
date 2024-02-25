import { create } from "zustand";

interface GameStore {
  game?: {
    id: string
  },
  requests: Array<{
    id: string,
    value: number,
    count: number,
    imageId: string
  }>,
  setGame(game: GameStore["game"]): void
  setRequests(requests: GameStore["requests"]): void
}

export const useGameStore = create<GameStore>((set) => ({
  requests: [],
  setGame: (game) => set({ game }),
  setRequests: (requests) => set({ requests })
}));