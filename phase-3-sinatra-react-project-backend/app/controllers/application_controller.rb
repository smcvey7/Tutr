class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get "/" do
    { message: "Good luck with your project!" }.to_json
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

    student_info.to_json
  end

  get '/tutors/user-search/:username' do

    student_info = Tutor.find_by(username: params[:username])

    student_info.to_json
  end

  get '/course-lookup/:currentCourse' do 

    student_list = Student.where("current_course like ?", "%#{params[:currentCourse]}%")
    tutor_list = Tutor.where("courses like ?", "%#{params[:currentCourse]}%")

    combined = student_list+tutor_list

    combined.to_json

  end

  get '/user-lookup/:name' do 

    student_list = Student.where("name like ?", "%#{params[:name]}%")
    tutor_list = Tutor.where("name like ?", "%#{params[:name]}%")

    combined = student_list+tutor_list

    combined.to_json

  end

end
