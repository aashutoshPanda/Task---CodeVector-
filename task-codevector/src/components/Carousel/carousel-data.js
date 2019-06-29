let api_call_data = {
  total: "12720",
  page: 1,
  pages: 636,
  tv_shows: [
    {
      id: 35624,
      name: "The Flash",
      permalink: "the-flash",
      start_date: "2014-10-07",
      end_date: null,
      country: "US",
      network: "The CW",
      status: "Running",
      image_thumbnail_path:
        "https://static.episodate.com/images/tv-show/thumbnail/35624.jpg"
    },
    {
      id: 23455,
      name: "Game of Thrones",
      permalink: "game-of-thrones",
      start_date: "2011-04-17",
      end_date: null,
      country: "US",
      network: "HBO",
      status: "Ended",
      image_thumbnail_path:
        "https://static.episodate.com/images/tv-show/thumbnail/23455.jpg"
    },
    {
      id: 29560,
      name: "Arrow",
      permalink: "arrow",
      start_date: "2012-10-10",
      end_date: null,
      country: "US",
      network: "The CW",
      status: "Running",
      image_thumbnail_path:
        "https://static.episodate.com/images/tv-show/thumbnail/29560.jpg"
    },
    {
      id: 24010,
      name: "The Walking Dead",
      permalink: "the-walking-dead",
      start_date: "2010-10-31",
      end_date: null,
      country: "US",
      network: "AMC",
      status: "Running",
      image_thumbnail_path:
        "https://static.episodate.com/images/tv-show/thumbnail/24010.jpg"
    },
    {
      id: 47145,
      name: "Dragon Ball Super",
      permalink: "dragon-ball-super",
      start_date: "2015-07-05",
      end_date: null,
      country: "JP",
      network: "Fuji TV",
      status: "Ended",
      image_thumbnail_path:
        "https://static.episodate.com/images/tv-show/thumbnail/47145."
    },
    {
      id: 46778,
      name: "Stranger Things",
      permalink: "montauk",
      start_date: "2016-07-15",
      end_date: null,
      country: "US",
      network: "Netflix",
      status: "Running",
      image_thumbnail_path:
        "https://static.episodate.com/images/tv-show/thumbnail/46778.jpg"
    },
    {
      id: 8362,
      name: "The Big Bang Theory",
      permalink: "the-big-bang-theory",
      start_date: "2007-09-24",
      end_date: null,
      country: "US",
      network: "CBS",
      status: "Ended",
      image_thumbnail_path:
        "https://static.episodate.com/images/tv-show/thumbnail/8362.jpg"
    },
    {
      id: 22410,
      name: "Sherlock",
      permalink: "sherlock",
      start_date: "2010-07-25",
      end_date: null,
      country: "UK",
      network: "BBC One",
      status: "To Be Determined",
      image_thumbnail_path:
        "https://static.episodate.com/images/tv-show/thumbnail/22410.jpg"
    },
    {
      id: 31452,
      name: "Marvel's Agents of S.H.I.E.L.D.",
      permalink: "marvel-s-agents-of-s-h-i-e-l-d",
      start_date: "2013-09-24",
      end_date: null,
      country: "US",
      network: "ABC",
      status: "Running",
      image_thumbnail_path:
        "https://static.episodate.com/images/tv-show/thumbnail/31452.jpg"
    },
    {
      id: 37444,
      name: "Marvel's Daredevil",
      permalink: "daredevil",
      start_date: "2015-04-10",
      end_date: null,
      country: "US",
      network: "Netflix",
      status: "Ended",
      image_thumbnail_path:
        "https://static.episodate.com/images/tv-show/thumbnail/37444.jpg"
    },
    {
      id: 29671,
      name: "Gotham",
      permalink: "gotham",
      start_date: "2014-09-22",
      end_date: null,
      country: "US",
      network: "FOX",
      status: "Ended",
      image_thumbnail_path:
        "https://static.episodate.com/images/tv-show/thumbnail/29671.png"
    },
    {
      id: 29977,
      name: "Vikings",
      permalink: "vikings",
      start_date: "2013-03-03",
      end_date: null,
      country: "CA",
      network: "History",
      status: "Running",
      image_thumbnail_path:
        "https://static.episodate.com/images/tv-show/thumbnail/29977.jpg"
    },
    {
      id: 52439,
      name: "Boku no Hero Academia",
      permalink: "boku-no-hero-academia",
      start_date: "2016-04-03",
      end_date: null,
      country: "JP",
      network: "MBS",
      status: "Running",
      image_thumbnail_path:
        "https://static.episodate.com/images/tv-show/thumbnail/52439.jpg"
    }
  ]
};
let tv_shows_array = api_call_data.tv_shows;

const reduced_tv_shows = tv_shows_array.map(tv_show => ({
  name: `${tv_show.name}`,
  id: `${tv_show.id}`,
  image_thumbnail_path: `${tv_show.image_thumbnail_path}`
}));

export default reduced_tv_shows;
