class Lesson < ActiveRecord::Base
 belongs_to :student
 belongs_to :tutor

 def self.course_search course
  Lesson.where("subject like ?", "%#{course}%")
 end

end