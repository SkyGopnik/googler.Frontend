import Background from "components/Background";
import Page from "components/Page";
import PageContent from "components/PageContent";
import Stats from "components/Stats";

import Actions from "./_components/Actions";
import Logo from "./_components/Logo";

import style from "./index.module.scss";

export default function MainPage() {
  return (
    <Page>
      <PageContent>
        <Logo />
        <Stats className={style.stats} score={0} record={0} />
        <Actions />
      </PageContent>
      <Background />
    </Page>
  );
}