class AddCommentToReplies < ActiveRecord::Migration[5.2]
  def change
    add_reference :replies, :comment, foreign_key: true
  end
end