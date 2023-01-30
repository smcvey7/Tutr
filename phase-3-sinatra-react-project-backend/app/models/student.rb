class Student < ActiveRecord::Base
  has_many :lessons
  has_many :tutors, through: :lessons

  def self.student_list lesson_list
    students = []
    lesson_list.each do |lesson|
      students << Student.find(lesson.student_id)
    end
    students.uniq
  end

  def self.search query
    Student.where("name like ?", "%#{query}%")
  end

end