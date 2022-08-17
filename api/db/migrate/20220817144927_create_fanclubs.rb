class CreateFanclubs < ActiveRecord::Migration[6.0]
  def change
    create_table :fanclubs do |t|
      t.integer :fanclub_master_id, null: false
      t.references :user, foreign_key: true, null: false

      t.timestamps
    end
  end
end
