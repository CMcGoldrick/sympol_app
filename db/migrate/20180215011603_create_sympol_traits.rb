class CreateSympolTraits < ActiveRecord::Migration[5.1]
  def change
    create_table :sympol_traits do |t|
      t.integer :sympol_id
      t.integer :trait_id

      t.timestamps
    end
  end
end
