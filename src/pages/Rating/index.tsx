import Page from "components/Page";
import { useState } from "react";
import { useAsyncEffect } from "hooks/useAsyncEffect";
import axios from "axios";

import Item from "./_components/Item";
import Header from "./_components/Header";

import { Rating } from "./_types/rating";

import style from "./index.module.scss";

export default function RatingPage() {
  const [rating, setRating] = useState<Rating>([]);

  useAsyncEffect(async () => {
    const { data } = await axios.get("/games/rating");

    setRating(data);
  }, []);

  return (
    <Page className={style.rating}>
      <Header>Рейтинг</Header>
      <div className={style.rating__list}>
        {rating.map((item, index) => (
          <Item
            key={item.user.id}
            place={index + 1}
            href={`https://vk.com/id${item.user.profile.id}`}
            target="_blank"
            avatar={item.user.profile.photoUrl}
            title={`${item.user.profile.firstName} ${item.user.profile.lastName}`}
            description={`Рекорд ${item.record}`}
          />
        ))}
      </div>
    </Page>
  );
}