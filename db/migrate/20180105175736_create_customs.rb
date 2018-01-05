class CreateCustoms < ActiveRecord::Migration[5.1]
  def change
    create_table :customs do |t|
      t.string :name
      t.string :description
      t.string :review

      t.timestamps
    end
  end
end
