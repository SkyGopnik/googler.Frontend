import Page from "components/Page";
import PageContent from "components/PageContent";
import Background from "components/Background";
import Title from "components/Title";
import Stats from "components/Stats";
import { useGameStore } from "store/game";
import { useEffect } from "react";
import { Banner } from "utils/banner";

import Actions from "./_components/Actions";

import style from "./index.module.scss";

export default function GameFinishPage() {
  const { game, stats } = useGameStore();

  useEffect(() => {
    Banner.show();
  }, []);

  return (
    <Page>
      <PageContent>
        <Title>Игра завершена</Title>
        <Stats
          className={style.stats}
          score={game?.score}
          record={stats?.record}
        />
        <Actions />
      </PageContent>
      <Background type="finish" />
    </Page>
  );
}