class CreateTutors < ActiveRecord::Migration[6.1]
  def change
    create_table :tutors do |t|
      t.string :position
      t.string :name
      t.string :courses
      t.string :image_url
      t.string :username
      t.string :password
    end
  end
end
