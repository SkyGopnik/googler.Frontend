export type Rating = Array<RatingItem>;

export type RatingItem = {
  user: {
    id: string,
    profile: {
      id: string,
      platform: string,
      firstName: string,
      lastName: string,
      photoUrl: string
    }
  },
  record: number
};