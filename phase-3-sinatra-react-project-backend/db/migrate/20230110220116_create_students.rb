class CreateStudents < ActiveRecord::Migration[6.1]
  def change
    create_table :students do |t|
      t.string :position
      t.string :name
      t.string :current_course
      t.integer :current_lesson
      t.string :username
      t.string :password
    end
  end
end
