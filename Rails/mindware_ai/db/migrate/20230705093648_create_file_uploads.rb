class CreateFileUploads < ActiveRecord::Migration[7.0]
  def change
    create_table :file_uploads do |t|
      t.string :file_name
      t.string :file_path
      t.text :description
      t.string :file_type

      t.timestamps
    end
  end
end
