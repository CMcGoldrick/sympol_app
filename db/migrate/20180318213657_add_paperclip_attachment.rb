class AddPaperclipAttachment < ActiveRecord::Migration[5.1]
  def change
    add_attachment :images, :image
  end
end
