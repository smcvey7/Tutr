class CreateLessons < ActiveRecord::Migration[6.1]
  def change
    create_table :lessons do |t|
      t.datetime :time
      t.string :subject
      t.string :info
      t.string :before_lesson
      t.string :after_lesson
      t.integer :grade
  end
end
