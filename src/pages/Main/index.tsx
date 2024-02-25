import Background from "components/Background";
import Page from "components/Page";
import PageContent from "components/PageContent";
import Stats from "components/Stats";

import Actions from "./_components/Actions";
import Logo from "./_components/Logo";

export default function MainPage() {
  return (
    <Page>
      <Background />
      <PageContent>
        <Logo />
        <Stats score={0} record={0} />
        <Actions />
      </PageContent>
    </Page>
  );
}