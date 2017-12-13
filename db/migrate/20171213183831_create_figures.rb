class CreateFigures < ActiveRecord::Migration[5.1]
  def change
    create_table :figures do |t|
      t.string :name
      t.string :description
      t.string :link

      t.timestamps
    end
  end
end
