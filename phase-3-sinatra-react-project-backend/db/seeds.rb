puts "🌱 Seeding spices..."

Student.create([
  {
    position: "student",
    name: "Test Student",
    current_course: "Elvish 203",
    current_lesson: 6,
    username: "teststudent",
    password:  "password"
  },
  {
    position: "student",
    name: "Pamela Louise",
    current_course: "German 101",
    current_lesson: 8,
    username: "pamelalouise",
    password:  "password"
  },
  {
    position: "student",
    name: "David Ward",
    current_course: "Pig Latin 303",
    current_lesson: 3,
    username: "davidward",
    password:  "password"
  },
  {
    position: "student",
    name: "Ally Irene",
    current_course: "Canadian 101",
    current_lesson: 4,
    username: "allyirene",
    password:  "password"
  },
  {
    position: "student",
    name: "Paul Herman",
    current_course: "Elvish 202",
    current_lesson: 10,
    username: "paulherman",
    password:  "password"
  },
  {
    position: "student",
    name: "Yiyi Hou",
    current_course: "Chinese 203",
    current_lesson: 13,
    username: "yiyihou",
    password:  "password"
  },
  {
    position: "student",
    name: "Henry Hou",
    current_course: "Korean 101",
    current_lesson: 3,
    username: "henryhou",
    password:  "password"
  },
  {
    position: "student",
    name: "Chris Charles",
    current_course: "German 102",
    current_lesson: 7,
    username: "chrischarles",
    password:  "password"
  },
  {
    position: "student",
    name: "Staci Jean",
    current_course: "Spanish 402",
    current_lesson: 8,
    username: "stacijean",
    password:  "password"
  },
  {
    position: "student",
    name: "Erich James",
    current_course: "Spanish 201",
    current_lesson: 12,
    username: "erichjames",
    password:  "password"
  },
  {
    position: "student",
    name: "George James",
    current_course: "Spanish 302",
    current_lesson: 8,
    username: "georgejames",
    password:  "password"
  }
])

Tutor.create([
  {
    position: "tutor",
    name: "Whitney",
    courses: "Chinese and Korean",
    image_url: "https://m.media-amazon.com/images/M/MV5BMTkyMzA1NTk1M15BMl5BanBnXkFtZTcwMTYxNTkzNw@@._V1_.jpg",
    username: "whitney",
    password: "password",
  },
  {
    position: "tutor",
    name: "Angie",
    courses: "Spanish and French",
    image_url: "https://www.themoviedb.org/t/p/w500/k3W1XXddDOH2zibPkNotIh5amHo.jpg",
    username: "angie",
    password: "password",
  },
  {
    position: "tutor",
    name: "Brad",
    courses: "German, French, and Pig Latin",
    image_url: "https://m.media-amazon.com/images/M/MV5BMjA1MjE2MTQ2MV5BMl5BanBnXkFtZTcwMjE5MDY0Nw@@._V1_.jpg",
    username: "brad",
    password: "password",
  },
  {
    position: "tutor",
    name: "Hayao",
    courses: "Japanese",
    image_url: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Hayao_Miyazaki_cropped_1_Hayao_Miyazaki_201211.jpg",
    username: "hayao",
    password: "pasword",
  },
  {
    position: "tutor",
    name: "Katya",
    courses: "Russian",
    image_url: "https://nationaltoday.com/wp-content/uploads/2022/10/456841067-min-1.jpg",
    username: "katya",
    password: "password",
  },
  {
    position: "tutor",
    name: "Ariana",
    courses: "Polish and Ukrainian",
    image_url: "https://www.biography.com/.image/t_share/MTQ3MzM3MTcxNjA5NTkzNjQ3/ariana_grande_photo_jon_kopaloff_getty_images_465687098.jpg",
    username: "ariana",
    password: "password",
  },
  {
    position: "tutor",
    name: "Julia",
    courses: "Czech",
    image_url: "https://flxt.tmsimg.com/assets/1474_v9_bb.jpg",
    username: "julia",
    password: "password",
  },
  {
    position: "tutor",
    name: "Hugh",
    courses: "Australian and Canadian",
    image_url: "https://m.media-amazon.com/images/M/MV5BNDExMzIzNjk3Nl5BMl5BanBnXkFtZTcwOTE4NDU5OA@@._V1_.jpg",
    username: "hugh",
    password: "password",
  },
  {
    position: "tutor",
    name: "emily",
    courses: "Portuguese",
    image_url: "https://m.media-amazon.com/images/M/MV5BMTUxNDY4MTMzM15BMl5BanBnXkFtZTcwMjg5NzM2Ng@@._V1_.jpg",
    username: "emily",
    password: "password",
  },
  {
    position: "tutor",
    name: "Legolas",
    courses: "Elvish",
    image_url: "https://external-preview.redd.it/SncyBro0jmn_nUoqr8cwOUy0XWTMqyVJh9oLSbc92jw.png?width=640&crop=smart&format=pjpg&auto=webp&s=c8bf341d52d07327067b76650f0dc9f4976060a9",
    username: "legolas",
    password: "password",
  }
])

Lesson.create([
  {
    time: nil,
    subject: "Elvish 203",
    info: "Lesson 6",
    before_lesson: "",
    after_lesson: "",
    grade: nil,
    student_id: 1,
    tutor_id: 10
  },
  {
    time: nil,
    subject: "German 101",
    info: "Lesson 8",
    before_lesson: "",
    after_lesson: "",
    grade: nil,
    student_id: 2,
    tutor_id: 3
  },
  {
    time: nil,
    subject: "Pig Latin 303",
    info: "Lesson 3",
    before_lesson: "",
    after_lesson: "",
    grade: nil,
    student_id: 3,
    tutor_id: 3
  },
  {
    time: nil,
    subject: "Canadian 101",
    info: "Lesson 4",
    before_lesson: "",
    after_lesson: "",
    grade: nil,
    student_id: 4,
    tutor_id: 8
  },
  {
    time: nil,
    subject: "Elvish 202",
    info: "Lesson 10",
    before_lesson: "",
    after_lesson: "",
    grade: nil,
    student_id: 5,
    tutor_id: 10
  },
  {
    time: nil,
    subject: "Chinese 203",
    info: "Lesson 13",
    before_lesson: "",
    after_lesson: "",
    grade: nil,
    student_id: 6,
    tutor_id: 1
  },
  {
    time: nil,
    subject: "Korean 101",
    info: "Lesson 3",
    before_lesson: "",
    after_lesson: "",
    grade: nil,
    student_id: 7,
    tutor_id: 1
  },
  {
    time: nil,
    subject: "German 102",
    info: "Lesson 7",
    before_lesson: "",
    after_lesson: "",
    grade: nil,
    student_id: 8,
    tutor_id: 3
  },
  {
    time: nil,
    subject: "Spanish 402",
    info: "Lesson 8",
    before_lesson: "",
    after_lesson: "",
    grade: nil,
    student_id: 9,
    tutor_id: 2
  },
  {
    time: nil,
    subject: "Spanish 201",
    info: "Lesson 12",
    before_lesson: "",
    after_lesson: "",
    grade: nil,
    student_id: 10,
    tutor_id: 2
  },
  {
    time: nil,
    subject: "Spanish 302",
    info: "Lesson 8",
    before_lesson: "",
    after_lesson: "",
    grade: nil,
    student_id: 11,
    tutor_id: 2
  }
])

puts "✅ Done seeding!"
