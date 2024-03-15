import { create } from "zustand";
import bridge, { EAdsFormats } from "@vkontakte/vk-bridge";

interface CoolDownStore {
  finishAds: boolean,
  showFinishAds: () => void
}

export const useCoolDownStore = create<CoolDownStore>((set, get) => ({
  finishAds: false,
  showFinishAds: () => {
    if (get().finishAds) {
      return;
    }

    bridge.send("VKWebAppShowNativeAds", {
      ad_format: EAdsFormats.INTERSTITIAL
    }).catch((e) => console.log(e));

    set({
      finishAds: true
    });

    setTimeout(() => set({
      finishAds: false
    }), 30000);
  }
}));
