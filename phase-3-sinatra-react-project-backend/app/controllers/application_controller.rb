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

    student_info.to_json(include: [
      :lessons,
      :tutors
      ])
  end

  get '/tutors/user-search/:username' do

    student_info = Tutor.find_by(username: params[:username])

    student_info.to_json(include: [
      :lessons,
      :students
    ])
  end

  get '/course-lookup/:course' do 

    results = []

    lesson_list = Lesson.where("subject like ?", "%#{params[:course]}%")

    student_list = lesson_list.each do |lesson|
      results << Student.find(lesson.student_id)
    end

    puts "student list", student_list

    tutor_list = lesson_list.each do |lesson|
      results << Tutor.find(lesson.tutor_id)
    end

    puts "tutor_list", tutor_list

    results.uniq.to_json(include: [
      :lessons
    ])

  end

  get '/user-lookup/:name' do 

    results = []

    results << Student.where("name like ?", "%#{params[:name]}%")
    results << Tutor.where("name like ?", "%#{params[:name]}%")

    results.to_json

  end

end
