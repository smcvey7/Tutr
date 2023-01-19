class CreateLessons < ActiveRecord::Migration[6.1]
  def change
    create_table :lessons do |t|
      t.text :date
      t.text :time
      t.string :subject
      t.integer :info
      t.string :before_lesson
      t.string :after_lesson
      t.integer :grade
      t.integer :student_id
      t.integer :tutor_id
    end
  end
end
