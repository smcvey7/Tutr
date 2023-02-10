
class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'

  get '/' do
    "The info from this API can be accessed using: 
    tutor info: localhost:9292/tutors
    student info: localhost:9292/students
    lesson info: localhost:9292/lessons"
  end
  
  get '/students' do
    students = Student.all

    students.to_json
  end

  get '/tutors' do
    tutors = Tutor.all

    tutors.to_json
  end


  get '/lessons' do
    lessons = Lesson.all

    lessons.to_json
  end

  get '/students/user-search/:username' do

    student_info = Student.find_by(username: params[:username])

    student_info.to_json(
      include: {
        lessons: {
          include: [
            :tutor,
            :student
        ]
      }
    })
  end

  get '/tutors/user-search/:username' do

    student_info = Tutor.find_by(username: params[:username])

    student_info.to_json(
      include: {
        lessons: {
          include: [
            :tutor,
            :student
        ]
      }
    })
  end

  get '/course-lookup/:course' do 
    lesson_list = Lesson.course_search (params[:course])

    (Student.student_list(lesson_list)+Tutor.tutor_list(lesson_list)).to_json(include: {
      lessons: {
        include: [
          :tutor,
          :student
      ]
    }
  })

  end

  get '/user-lookup/:name' do 

    (Student.search(params[:name])+Tutor.search(params[:name])).to_json(include: {
      lessons: {
        include: [
          :tutor,
          :student
      ]
    }
  })

  end

  patch '/edit-lesson/:id' do

    lesson = Lesson.find(params[:id])

    lesson.update(
      date: params[:date],
      time: params[:time],
      info: params[:info]
    )

    lesson.to_json
  end

  delete '/delete-lesson/:id' do
    lesson = Lesson.find(params[:id])
    lesson.destroy
  end

  get '/student-tutor-list' do

    list = {
      tutor_list: [],
      student_list: []
    }

    Tutor.all.each do |tutor|
        list[:tutor_list] << {
          username: tutor.username,
          id: tutor.id,
          courses: tutor.courses
        }
    end

    Student.all.each do |student|
      list[:student_list] << {
        username: student.username,
        id: student.id
      }
    end

    list.to_json
  end

  post '/create-lesson' do
    newLesson = Lesson.create(
      date: params[:date],
      time: params[:time],
      info: params[:info],
      tutor_id: params[:tutor_id],
      student_id: params[:student_id],
      subject: params[:subject]
    )

    newLesson.to_json
  end

end
