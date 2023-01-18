class CreateStudents < ActiveRecord::Migration[6.1]
  def change
    create_table :students do |t|
      t.string :position
      t.string :name
      t.string :username
      t.string :password
    end
  end
end
