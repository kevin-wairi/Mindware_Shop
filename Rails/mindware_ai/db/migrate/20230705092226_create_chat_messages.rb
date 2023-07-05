class CreateChatMessages < ActiveRecord::Migration[7.0]
  def change
    create_table :chat_messages do |t|
      t.references :chatbot, null: false, foreign_key: true
      t.string :role
      t.text :content
      t.string :function_name

      t.timestamps
    end
  end
end
