class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
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

    results = []

    lesson_list = Lesson.where("subject like ?", "%#{params[:course]}%")

    student_list = lesson_list.each do |lesson|
      results << Student.find(lesson.student_id)
    end

    tutor_list = lesson_list.each do |lesson|
      results << Tutor.find(lesson.tutor_id)
    end

    results.uniq.to_json(include: {
      lessons: {
        include: [
          :tutor,
          :student
      ]
    }
  })

  end

  get '/user-lookup/:name' do 

    student_list = Student.where("name like ?", "%#{params[:name]}%")
    tutor_list = Tutor.where("name like ?", "%#{params[:name]}%")

    combined = student_list+tutor_list

    combined.to_json(include: {
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
      info: params[:info],
      before_lesson: params[:beforeLesson],
      after_lesson: params[:afterLesson]
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
          id: tutor.id
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

end
