class Tutor < ActiveRecord::Base
  has_many :lessons
  has_many :students, through: :lessons

  def self.tutor_list lesson_list
    tutors =[]
    
    lesson_list.each do |lesson|
      tutors << Tutor.find(lesson.tutor_id)
    end
    tutors.uniq
  end

  def self.search query
    Tutor.where("name like ?", "%#{query}%")
  end

end