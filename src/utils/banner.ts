import bridge, { BannerAdLocation } from "@vkontakte/vk-bridge";

export class Banner {

  public static show() {
    bridge.send("VKWebAppShowBannerAd", {
      banner_location: BannerAdLocation.BOTTOM
    }).catch((e) => console.error(e));
  }

  public static hide() {
    bridge.send("VKWebAppHideBannerAd").catch((e) => console.error(e));
  }

}