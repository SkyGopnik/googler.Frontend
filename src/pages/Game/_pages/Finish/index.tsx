import Page from "components/Page";
import PageContent from "components/PageContent";
import Background from "components/Background";
import Title from "components/Title";
import Stats from "components/Stats";

import Actions from "./_components/Actions";

import style from "./index.module.scss";

export default function GameFinishPage() {
  return (
    <Page>
      <PageContent>
        <Title>Игра завершена</Title>
        <Stats className={style.stats} score={0} record={0} />
        <Actions />
      </PageContent>
      <Background type="finish" />
    </Page>
  );
}