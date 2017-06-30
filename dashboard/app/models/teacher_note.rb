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
  
end
