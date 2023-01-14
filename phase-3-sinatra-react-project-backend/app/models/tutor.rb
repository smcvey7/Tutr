class Tutor < ActiveRecord::Base
  has_many :lessons
  has_many :students, through: :lessons
end