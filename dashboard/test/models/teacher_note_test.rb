require 'test_helper'

class TeacherNoteTest < ActiveSupport::TestCase
  test 'note for teacher is valid' do
    note = build :teacher_note
    assert note.valid?
  end

  test 'note for non-teacher is invalid' do
    student = create :student
    note = build :teacher_note, user: student
    refute note.valid?
    assert_equal 1, note.errors.count
    assert_equal 'User must be a teacher', note.errors.full_messages.first
  end
end
