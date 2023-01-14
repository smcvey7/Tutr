puts "🌱 Seeding spices..."

Student.create([
  {
    name: "Test Student",
    current_course: "Elvish 203",
    current_lesson: 6,
    username: "teststudent",
    password:  "password"
  },
  {
    name: "Pamela Louise",
    current_course: "German 101",
    current_lesson: 8,
    username: "pamelalouise",
    password:  "password"
  },
  {
    name: "David Ward",
    current_course: "Pig Latin 303",
    current_lesson: 3,
    username: "davidward",
    password:  "password",
  },
  {
    name: "Ally Irene",
    current_course: "Canadian 101",
    current_lesson: 4,
    username: "allyirene",
    password:  "password"
  },
  {
    name: "Paul Herman",
    current_course: "Elvish 202",
    current_lesson: 10,
    username: "paulherman",
    password:  "password"
  },
  {
    name: "Yiyi Hou",
    current_course: "Chinese 203",
    current_lesson: 13,
    username: "yiyihou",
    password:  "password"
  },
  {
    name: "Henry Hou",
    current_course: "Korean 101",
    current_lesson: 3,
    username: "henryhou",
    password:  "password"
  },
  {
    name: "Chris Charles",
    current_course: "German 102",
    current_lesson: 7,
    username: "chrischarles",
    password:  "password"
  },
  {
    name: "Staci Jean",
    current_course: "Spanish 402",
    current_lesson: 8,
    username: "stacijean",
    password:  "password"
  },
  {
    name: "Erich James",
    current_course: "Spanish 201",
    current_lesson: 12,
    username: "erichjames",
    password:  "password"
  },
  {
    name: "George James",
    current_course: "Spanish 302",
    current_lesson: 8,
    username: "georgejames",
    password:  "password"
  }
])

Tutor.create([
  {
    name: "Steven",
    courses: "Chinese and Korean",
    image_url: "../img/steven",
    username: "steven",
    password: "password",
  },
  {
    name: "Angie",
    courses: "Spanish and French",
    image_url: "https://www.themoviedb.org/t/p/w500/k3W1XXddDOH2zibPkNotIh5amHo.jpg",
    username: "angie",
    password: "password",
  },
  {
    name: "Legolas",
    courses: "Elvish",
    image_url: "https://static.wikia.nocookie.net/the-hobbit-lotr-trilogies/images/c/c0/Legolas2.jpg/revision/latest?cb=20190721145737",
    username: "legolas",
    password: "password",
  },
  {
    name: "Brad",
    courses: "German, French, and Pig Latin",
    image_url: "https://m.media-amazon.com/images/M/MV5BMjA1MjE2MTQ2MV5BMl5BanBnXkFtZTcwMjE5MDY0Nw@@._V1_.jpg",
    username: "brad",
    password: "password",
  },
  {
    name: "Hayao",
    courses: "Japanese",
    image_url: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Hayao_Miyazaki_cropped_1_Hayao_Miyazaki_201211.jpg",
    username: "hayao",
    password: "pasword",
  },
  {
    name: "Katya",
    courses: "Russian",
    image_url: "https://nationaltoday.com/wp-content/uploads/2022/10/456841067-min-1.jpg",
    username: "katya",
    password: "password",
  },
  {
    name: "Ariana",
    courses: "Polish and Ukrainian",
    image_url: "https://www.biography.com/.image/t_share/MTQ3MzM3MTcxNjA5NTkzNjQ3/ariana_grande_photo_jon_kopaloff_getty_images_465687098.jpg",
    username: "ariana",
    password: "password",
  },
  {
    name: "Julia",
    courses: "Czech",
    image_url: "https://flxt.tmsimg.com/assets/1474_v9_bb.jpg",
    username: "julia",
    password: "password",
  },
  {
    name: "Hugh",
    courses: "Australian and Canadian",
    image_url: "https://m.media-amazon.com/images/M/MV5BNDExMzIzNjk3Nl5BMl5BanBnXkFtZTcwOTE4NDU5OA@@._V1_.jpg",
    username: "hugh",
    password: "password",
  },
  {
    name: "emily",
    courses: "Portuguese",
    image_url: "https://m.media-amazon.com/images/M/MV5BMTUxNDY4MTMzM15BMl5BanBnXkFtZTcwMjg5NzM2Ng@@._V1_.jpg",
    username: "emily",
    password: "password",
  },
])

puts "✅ Done seeding!"
