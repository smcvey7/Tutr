class CreateTutors < ActiveRecord::Migration[6.1]
  def change
    create_table :tutors do |t|
      t.string :first_name
      t.string :last_name
      t.string :courses
      t.string :booking_link
      t.string :username
      t.string :password
    end
  end
end
