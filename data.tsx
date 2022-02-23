interface Media {
  src: string;
  type: "video" | "image";
}

interface PostData {
  id?: number;
  title?: string;
  thumbnail: string;
  description?: string;
  media: Array<Media>;
}

export const post: Array<PostData> = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    thumbnail:
      "https://64.media.tumblr.com/b6778bdd789fa9154c5b5ceb3117029c/23b9c65684ff27fe-9f/s540x810/cc1bdfae7c866b27506793af4b43f1e897ca816c.jpg",
    media: [
      {
        type: "image",
        src: "https://i.ytimg.com/vi/_U2lMCltAPk/maxresdefault.jpg",
      },
      {
        type: "image",
        src: "https://i.ytimg.com/vi/_U2lMCltAPk/maxresdefault.jpg",
      },
      {
        type: "video",
        src: "https://www.youtube.com/embed/sbPlsTE3jhc",
      },
    ],
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

    thumbnail:
      "https://i.pinimg.com/736x/b4/2a/b1/b42ab1578b73a89f43b2c452471c64b9.jpg",
    media: [
      {
        type: "image",
        src: "https://i.ytimg.com/vi/_U2lMCltAPk/maxresdefault.jpg",
      },
      {
        type: "video",
        src: "https://www.youtube.com/embed/sbPlsTE3jhc",
      },
    ],
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

    thumbnail:
      "https://i.pinimg.com/474x/36/c1/c3/36c1c301fd1172d20ba73022ddafc642.jpg",
    media: [
      {
        type: "image",
        src: "https://i.ytimg.com/vi/_U2lMCltAPk/maxresdefault.jpg",
      },
      {
        type: "video",
        src: "https://www.youtube.com/embed/sbPlsTE3jhc",
      },
    ],
  },
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    thumbnail:
      "https://64.media.tumblr.com/b6778bdd789fa9154c5b5ceb3117029c/23b9c65684ff27fe-9f/s540x810/cc1bdfae7c866b27506793af4b43f1e897ca816c.jpg",
    media: [
      {
        type: "image",
        src: "https://i.ytimg.com/vi/_U2lMCltAPk/maxresdefault.jpg",
      },
      {
        type: "image",
        src: "https://i.ytimg.com/vi/_U2lMCltAPk/maxresdefault.jpg",
      },
      {
        type: "video",
        src: "https://www.youtube.com/embed/sbPlsTE3jhc",
      },
    ],
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

    thumbnail:
      "https://i.pinimg.com/736x/b4/2a/b1/b42ab1578b73a89f43b2c452471c64b9.jpg",
    media: [
      {
        type: "image",
        src: "https://i.ytimg.com/vi/_U2lMCltAPk/maxresdefault.jpg",
      },
      {
        type: "video",
        src: "https://www.youtube.com/embed/sbPlsTE3jhc",
      },
    ],
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

    thumbnail:
      "https://i.pinimg.com/474x/36/c1/c3/36c1c301fd1172d20ba73022ddafc642.jpg",
    media: [
      {
        type: "video",
        src: "https://www.youtube.com/embed/sbPlsTE3jhc",
      },
      {
        type: "image",
        src: "https://i.ytimg.com/vi/_U2lMCltAPk/maxresdefault.jpg",
      },
    ],
  },
];
