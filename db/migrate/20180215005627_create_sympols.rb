class CreateSympols < ActiveRecord::Migration[5.1]
  def change
    create_table :sympols do |t|
      t.string :name
      t.string :origin
      t.text :description

      t.timestamps
    end
  end
end
