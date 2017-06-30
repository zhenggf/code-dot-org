class CreateTeacherNotes < ActiveRecord::Migration[5.0]
  def change
    create_table :teacher_notes do |t|
      t.timestamps
      t.references :user, null: false, index: true
      t.text :content
    end
  end
end
