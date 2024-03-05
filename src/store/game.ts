import { create } from "zustand";
import axios from "axios";

interface GameStore {
  game?: {
    id: string,
    score: number
  },
  stats?: {
    record: number,
    position: number
  },
  requests: Array<{
    id: string,
    value: string,
    count: number,
    imageId: string
  }>,
  startGame(continueId?: string): Promise<void>,
  getStats(): Promise<void>,
  setGame(game: GameStore["game"]): void,
  setStats(stats: GameStore["stats"]): void,
  setRequests(requests: GameStore["requests"]): void
}

export const useGameStore = create<GameStore>((set) => ({
  requests: [],
  startGame: async (continueId) => {
    const { data: { game, requests } } = await axios.post(
      !continueId ? "/games/new" : `/games/${continueId}/continue`
    );

    set({
      game,
      requests
    });
  },
  getStats: async () => {
    const { data } = await axios.get("/games/stats");

    set({
      stats: data
    });
  },
  setGame: (game) => set({ game }),
  setStats: (stats) => set({ stats }),
  setRequests: (requests) => set({ requests })
}));