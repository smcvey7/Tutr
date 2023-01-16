class Student < ActiveRecord::Base
  has_one :lesson
  has_one :tutor, through: :lesson
end