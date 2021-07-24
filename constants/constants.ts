export const API_PREFIX: string = "https://imdb-api.com/en/API";
export const API_URLS: { [key: string]: string } = {
  popular_movies: `${API_PREFIX}/MostPopularMovies/${process.env.IMDB_API_KEY}`,
  popular_tvs: `${API_PREFIX}/MostPopularTVs/${process.env.IMDB_API_KEY}`,
  in_theatres: `${API_PREFIX}/InTheaters/${process.env.IMDB_API_KEY}`,
  coming_soon: `${API_PREFIX}/ComingSoon/${process.env.IMDB_API_KEY}`,
  get_details: `${API_PREFIX}/Title/${process.env.IMDB_API_KEY}/:titleId`,
  get_trailer: `${API_PREFIX}/Trailer/${process.env.IMDB_API_KEY}/:titleId`,
};

export enum Filters {
  popular_movies = "Popular movies",
  popular_tvs = "Popular TVs",
  in_theatres = "In theaters",
  coming_soon = "Coming soon",
}

export const SomeTitles: string[] = [
  "tt3480822",
  "tt3554046",
  "tt9777666",
  "tt9701940",
  "tt6566576",
  "tt8368408",
  "tt9701942",
  "tt8332922",
  "tt5433138",
  "tt12801262",
  "tt6334354",
  "tt8847712",
  "tt11525644",
  "tt11003218",
  "tt3228774",
  "tt8772262",
  "tt7131622",
  "tt1321510",
  "tt0117705",
  "tt7601480",
  "tt10954652",
  "tt11083552",
  "tt8097030",
  "tt8244784",
  "tt8385148",
];

export const TempTitleData = {
  id: "tt9140554",
  title: "Loki",
  originalTitle: "",
  fullTitle: "Loki (2021– )",
  type: "TVSeries",
  year: "2021",
  image:
    "https://imdb-api.com/images/original/MV5BNTkwOTE1ZDYtODQ3Yy00YTYwLTg0YWQtYmVkNmFjNGZlYmRiXkEyXkFqcGdeQXVyNTc4MjczMTM@._V1_Ratio0.6762_AL_.jpg",
  releaseDate: "2021-06-08",
  runtimeMins: "",
  runtimeStr: "",
  plot: "The mercurial villain Loki resumes his role as the God of Mischief in a new series that takes place after the events of “Avengers: Endgame.”",
  plotLocal: "",
  plotLocalIsRtl: false,
  awards: "",
  directors: "",
  directorList: [],
  writers: "",
  writerList: [],
  stars: "Tom Hiddleston, Owen Wilson, Gugu Mbatha-Raw",
  starList: [
    { id: "nm1089991", name: "Tom Hiddleston" },
    { id: "nm0005562", name: "Owen Wilson" },
    { id: "nm1813221", name: "Gugu Mbatha-Raw" },
  ],
  actorList: [
    {
      id: "nm1089991",
      image:
        "https://imdb-api.com/images/original/MV5BNWYwODAyZjAtOTQ1My00MDY2LTg0NDQtZGFiMDRiYzY4ZmM2XkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_Ratio1.0000_AL_.jpg",
      name: "Tom Hiddleston",
      asCharacter: "Lokias Loki",
    },
    {
      id: "nm0005562",
      image:
        "https://imdb-api.com/images/original/MV5BMTgwMzQ4ODYxMV5BMl5BanBnXkFtZTcwNDAwMTc2NQ@@._V1_Ratio1.0000_AL_.jpg",
      name: "Owen Wilson",
      asCharacter: "Mobiusas Mobius",
    },
    {
      id: "nm1813221",
      image:
        "https://imdb-api.com/images/original/MV5BM2FlZWVlYWMtMDM5OC00M2IxLWI5ZmYtNzdiNGQ1OTA0MjgzXkEyXkFqcGdeQXVyOTIzNjQ2NjY@._V1_Ratio1.0000_AL_.jpg",
      name: "Gugu Mbatha-Raw",
      asCharacter: "Ravonna Renslayeras Ravonna Renslayer",
    },
    {
      id: "nm1620545",
      image:
        "https://imdb-api.com/images/original/MV5BYjk4YmMyOWYtMzlhZS00Yjg4LTk0NjQtNDdmMmViMzk3MDZhXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_Ratio1.0000_AL_.jpg",
      name: "Sophia Di Martino",
      asCharacter: "Sylvieas Sylvie…",
    },
    {
      id: "nm2148911",
      image:
        "https://imdb-api.com/images/original/MV5BMTA4ODkxOTEwMzZeQTJeQWpwZ15BbWU4MDc4NjM1NDAx._V1_Ratio1.5000_AL_.jpg",
      name: "Wunmi Mosaku",
      asCharacter: "Hunter B-15as Hunter B-15",
    },
    {
      id: "nm7603745",
      image:
        "https://imdb-api.com/images/original/MV5BMTI0NmRiMDUtYzM5ZS00ZTQwLTk3OTMtZjg5OTFlMzc0NjNkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTI5NjIyMw@@._V1_Ratio1.0000_AL_.jpg",
      name: "Sasha Lane",
      asCharacter: "Hunter C-20as Hunter C-20",
    },
    {
      id: "nm4903281",
      image:
        "https://imdb-api.com/images/original/MV5BNjk5NDgyODEtOTE2YS00OWFlLWE4NGMtMjJlZmExN2QwNDc5XkEyXkFqcGdeQXVyMTE1MzI1ODMx._V1_Ratio2.0571_AL_.jpg",
      name: "Philip Fornah",
      asCharacter: "Minuteman #1as Minuteman #1",
    },
    {
      id: "nm2538885",
      image:
        "https://imdb-api.com/images/original/MV5BNGNmNzM3MjktZDRkMi00OWEzLWJmYjAtNTNhZDY2YzhjZDFlXkEyXkFqcGdeQXVyMTc3NzUzNTk@._V1_Ratio1.0000_AL_.jpg",
      name: "Michelle Rose",
      asCharacter: "Minuteman #3as Minuteman #3",
    },
    {
      id: "nm4182692",
      image:
        "https://imdb-api.com/images/original/MV5BOWQ5MmIxMDMtMDNkNS00NzQ3LWExZDQtNDljZmEwMTAyOTZhXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_Ratio1.0000_AL_.jpg",
      name: "Lauren Revard",
      asCharacter: "Miss Minutes On-Set Readeras Miss Minutes On-Set Reader…",
    },
    {
      id: "nm4370055",
      image:
        "https://imdb-api.com/images/original/MV5BYjJjZDNhM2EtM2M2NS00MWUyLTg4ZWMtNGVhMDNjMDI5MjVjXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_Ratio1.0000_AL_.jpg",
      name: "David A MacDonald",
      asCharacter: "Minuteman #2as Minuteman #2…",
    },
    {
      id: "nm1715243",
      image:
        "https://imdb-api.com/images/original/MV5BMjE0NTY2ODYxNF5BMl5BanBnXkFtZTgwNzg1MTk4NjE@._V1_Ratio1.0000_AL_.jpg",
      name: "Erika Coleman",
      asCharacter: "Florence Schaffneras Florence Schaffner…",
    },
    {
      id: "nm0001290",
      image:
        "https://imdb-api.com/images/original/MV5BMTc2NzA1NDk1Ml5BMl5BanBnXkFtZTgwMjk2NTA0NjM@._V1_Ratio1.0000_AL_.jpg",
      name: "Richard E. Grant",
      asCharacter: "Classic Lokias Classic Loki",
    },
    {
      id: "nm3082341",
      image:
        "https://imdb-api.com/images/original/MV5BMTgzMzM4NDc3MV5BMl5BanBnXkFtZTcwNjc1MTk1OQ@@._V1_Ratio1.0000_AL_.jpg",
      name: "Eugene Cordero",
      asCharacter: "Caseyas Casey",
    },
    {
      id: "nm2665765",
      image:
        "https://imdb-api.com/images/original/MV5BODkxMDIxMjktOGZmYy00N2QyLTk0NDEtZjJiZTBmZTY2YTY3XkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_Ratio1.0000_AL_.jpg",
      name: "Neil Ellice",
      asCharacter: "Hunter D-90as Hunter D-90",
    },
    {
      id: "nm0152839",
      image:
        "https://imdb-api.com/images/original/MV5BYzk4ZTY3ZGQtYjM4Zi00MGYwLTgwZGYtZDlmYmY0ZjgxMDE2XkEyXkFqcGdeQXVyNzcwOTY0ODg@._V1_Ratio1.0000_AL_.jpg",
      name: "Tara Strong",
      asCharacter: "Miss Minutesas Miss Minutes",
    },
    {
      id: "nm9015216",
      image:
        "https://imdb-api.com/images/original/MV5BZWYyZWRjMzUtMzUzYy00NTk2LTg3NzAtYTE4YWQ3NWFlMGU0XkEyXkFqcGdeQXVyNzYyMTA3MzE@._V1_Ratio1.0000_AL_.jpg",
      name: "Jon Levine",
      asCharacter: "Paperwork Clerkas Paperwork Clerk",
    },
    {
      id: "nm2371323",
      image:
        "https://imdb-api.com/images/original/MV5BMmM5ZjdkZGMtODk4YS00ODU4LTllNGUtNDYyZTQ3YmY2MmUzXkEyXkFqcGdeQXVyNjQyMDU2MDI@._V1_Ratio1.0000_AL_.jpg",
      name: "Aaron Beelner",
      asCharacter: "Scanner Clerkas Scanner Clerk",
    },
    {
      id: "nm4562330",
      image:
        "https://imdb-api.com/images/original/MV5BZDA5MWEyZWUtYWVkMS00MzQ2LThjZWUtYTNlODI5MTdkMTBiXkEyXkFqcGdeQXVyMjEyNzA1Nzc@._V1_Ratio1.0000_AL_.jpg",
      name: "Sarafina King",
      asCharacter: "Minuteman #9as Minuteman #9",
    },
  ],
  fullCast: null,
  genres: "Action, Adventure, Fantasy",
  genreList: [
    { key: "Action", value: "Action" },
    { key: "Adventure", value: "Adventure" },
    { key: "Fantasy", value: "Fantasy" },
  ],
  companies: "Marvel Studios",
  companyList: [{ id: "co0051941", name: "Marvel Studios" }],
  countries: "USA",
  countryList: [{ key: "USA", value: "USA" }],
  languages: "English",
  languageList: [{ key: "English", value: "English" }],
  contentRating: "TV-14",
  imDbRating: "8.9",
  imDbRatingVotes: "55085",
  metacriticRating: "",
  ratings: null,
  wikipedia: null,
  posters: null,
  images: null,
  trailer: null,
  boxOffice: {
    budget: "",
    openingWeekendUSA: "",
    grossUSA: "",
    cumulativeWorldwideGross: "",
  },
  tagline: "",
  keywords:
    "marvel cinematic universe,shared universe,marvel comics,based on comic,based on comic book",
  keywordList: [
    "marvel cinematic universe",
    "shared universe",
    "marvel comics",
    "based on comic",
    "based on comic book",
  ],
  similars: [
    {
      id: "tt9140560",
      title: "WandaVision",
      fullTitle: "WandaVision",
      year: "",
      image:
        "https://imdb-api.com/images/original/MV5BZGEwYmMwZmMtMTQ3MS00YWNhLWEwMmQtZTU5YTIwZmJjZGQ0XkEyXkFqcGdeQXVyMTI5MzA5MjA1._V1_Ratio0.6763_AL_.jpg",
      plot: "",
      directors: "",
      stars: "",
      genres: "",
      imDbRating: "8.1",
    },
    {
      id: "tt9208876",
      title: "The Falcon and the Winter Soldier",
      fullTitle: "The Falcon and the Winter Soldier",
      year: "",
      image:
        "https://imdb-api.com/images/original/MV5BODNiODVmYjItM2MyMC00ZWQyLTgyMGYtNzJjMmVmZTY2OTJjXkEyXkFqcGdeQXVyNzk3NDUzNTc@._V1_Ratio0.6763_AL_.jpg",
      plot: "",
      directors: "",
      stars: "",
      genres: "",
      imDbRating: "7.4",
    },
    {
      id: "tt12809988",
      title: "Sweet Tooth",
      fullTitle: "Sweet Tooth",
      year: "",
      image:
        "https://imdb-api.com/images/original/MV5BOTk4ZDRhYzEtZWExNy00MjIyLTgyYmMtN2Y2MzA4YzZhZTZmXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_Ratio0.8019_AL_.jpg",
      plot: "",
      directors: "",
      stars: "",
      genres: "",
      imDbRating: "8.0",
    },
    {
      id: "tt2861424",
      title: "Rick and Morty",
      fullTitle: "Rick and Morty",
      year: "",
      image:
        "https://imdb-api.com/images/original/MV5BZjRjOTFkOTktZWUzMi00YzMyLThkMmYtMjEwNmQyNzliYTNmXkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_Ratio0.6763_AL_.jpg",
      plot: "",
      directors: "",
      stars: "",
      genres: "",
      imDbRating: "9.2",
    },
    {
      id: "tt4154796",
      title: "Avengers: Endgame",
      fullTitle: "Avengers: Endgame",
      year: "",
      image:
        "https://imdb-api.com/images/original/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_Ratio0.6763_AL_.jpg",
      plot: "",
      directors: "",
      stars: "",
      genres: "",
      imDbRating: "8.4",
    },
    {
      id: "tt4574334",
      title: "Stranger Things",
      fullTitle: "Stranger Things",
      year: "",
      image:
        "https://imdb-api.com/images/original/MV5BN2ZmYjg1YmItNWQ4OC00YWM0LWE0ZDktYThjOTZiZjhhN2Q2XkEyXkFqcGdeQXVyNjgxNTQ3Mjk@._V1_Ratio0.6763_AL_.jpg",
      plot: "",
      directors: "",
      stars: "",
      genres: "",
      imDbRating: "8.7",
    },
    {
      id: "tt10160804",
      title: "Hawkeye",
      fullTitle: "Hawkeye",
      year: "",
      image:
        "https://imdb-api.com/images/original/MV5BM2FmYTMzYzUtNTAyYi00YzNkLWE5NTktMGRjMWJhNDUzODZmXkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_Ratio0.6763_AL_.jpg",
      plot: "",
      directors: "",
      stars: "",
      genres: "",
      imDbRating: "",
    },
    {
      id: "tt12708542",
      title: "Star Wars: The Bad Batch",
      fullTitle: "Star Wars: The Bad Batch",
      year: "",
      image:
        "https://imdb-api.com/images/original/MV5BZTVjNTVjMDMtNjUyMC00ZmM0LWE4OWMtMWZkNzY4NjM0NDMzXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_Ratio0.6763_AL_.jpg",
      plot: "",
      directors: "",
      stars: "",
      genres: "",
      imDbRating: "8.4",
    },
    {
      id: "tt3480822",
      title: "Black Widow",
      fullTitle: "Black Widow",
      year: "",
      image:
        "https://imdb-api.com/images/original/MV5BYjdmODAzNTctNWU1NS00ZmRiLWFiM2YtMjAyNzgzZWJlZjhlXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_Ratio0.6763_AL_.jpg",
      plot: "",
      directors: "",
      stars: "",
      genres: "",
      imDbRating: "",
    },
    {
      id: "tt1321510",
      title: "In the Heights",
      fullTitle: "In the Heights",
      year: "",
      image:
        "https://imdb-api.com/images/original/MV5BMzM1ZDY0YTktZTYzZi00MjZjLTllMDMtMmNlMmM5NmY4ZjllXkEyXkFqcGdeQXVyMTA1OTcyNDQ4._V1_Ratio0.6763_AL_.jpg",
      plot: "",
      directors: "",
      stars: "",
      genres: "",
      imDbRating: "7.6",
    },
    {
      id: "tt13138834",
      title: "Time",
      fullTitle: "Time",
      year: "",
      image:
        "https://imdb-api.com/images/original/MV5BNjM5N2RlNDgtNjM0OS00N2ZhLWJlYjgtNTdmNDVjMWM1ZmUzXkEyXkFqcGdeQXVyNjI2OTgxNzY@._V1_Ratio0.6860_AL_.jpg",
      plot: "",
      directors: "",
      stars: "",
      genres: "",
      imDbRating: "8.4",
    },
    {
      id: "tt3501632",
      title: "Thor: Ragnarok",
      fullTitle: "Thor: Ragnarok",
      year: "",
      image:
        "https://imdb-api.com/images/original/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_Ratio0.6763_AL_.jpg",
      plot: "",
      directors: "",
      stars: "",
      genres: "",
      imDbRating: "7.9",
    },
  ],
  tvSeriesInfo: {
    yearEnd: "",
    creators: "Michael Waldron",
    creatorList: [{ id: "nm5642271", name: "Michael Waldron" }],
    seasons: ["1"],
  },
  tvEpisodeInfo: null,
  errorMessage: "",
};
export const TempTrailerData = {
  imDbId: "tt0110413",
  title: "Léon: The Professional",
  fullTitle: "Léon: The Professional (1994)",
  type: "Movie",
  year: "1994",
  videoId: "vi2744254745",
  videoTitle: "The Professional",
  videoDescription: "Theatrical Trailer from Columbia Pictures",
  thumbnailUrl:
    "https://m.media-amazon.com/images/M/MV5BZjlkOWI0YzUtYmI1OS00M2ZkLTgwYjAtNjc3MzhjMGY3ODQ5XkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg",
  uploadDate: "04/11/2008 14:48:40",
  link: "https://www.imdb.com/video/vi2744254745",
  linkEmbed: "https://www.imdb.com/video/imdb/vi2744254745/imdb/embed",
  errorMessage: "",
};
