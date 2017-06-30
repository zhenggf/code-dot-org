# == Schema Information
#
# Table name: teacher_notes
#
#  id         :integer          not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :integer          not null
#  content    :text(65535)
#
# Indexes
#
#  index_teacher_notes_on_user_id  (user_id)
#

class TeacherNote < ApplicationRecord
  belongs_to :user

  validates_presence_of :user_id
  validate :user_is_teacher, if: -> {user.present?}
  def user_is_teacher
    unless user.teacher?
      errors.add :user_id, 'must be a teacher'
    end
  end
end
