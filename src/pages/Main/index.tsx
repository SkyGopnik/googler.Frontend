import Background from "components/Background";
import Page from "components/Page";
import PageContent from "components/PageContent";
import Stats from "components/Stats";
import { useGameStore } from "store/game";
import { useAsyncEffect } from "hooks/useAsyncEffect";
import { useEffect } from "react";
import { Banner } from "utils/banner";

import Actions from "./_components/Actions";
import Logo from "./_components/Logo";

import style from "./index.module.scss";

export default function MainPage() {
  const { stats, getStats } = useGameStore();

  useAsyncEffect(async () => {
    await getStats();
  }, []);

  useEffect(() => {
    Banner.show();
  }, []);

  return (
    <Page>
      <PageContent>
        <Logo />
        <Stats
          className={style.stats}
          record={stats?.record}
          position={stats?.position}
        />
        <Actions />
      </PageContent>
      <Background />
    </Page>
  );
}