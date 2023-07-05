class CreateChatbots < ActiveRecord::Migration[7.0]
  def change
    create_table :chatbots do |t|
      t.string :name
      t.text :description
      t.string :model_version
      t.string :api_key
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
