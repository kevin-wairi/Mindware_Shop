class CreateFunctions < ActiveRecord::Migration[7.0]
  def change
    create_table :functions do |t|
      t.string :name
      t.string :language
      t.json :manifest
      t.text :code

      t.timestamps
    end
  end
end
