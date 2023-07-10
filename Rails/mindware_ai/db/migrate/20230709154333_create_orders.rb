class CreateOrders < ActiveRecord::Migration[7.0]
  def change
    create_table :orders do |t|
      t.references :user, null: false, foreign_key: true
      t.decimal :total_amount
      t.text :shipping_address
      t.text :billing_address
      t.datetime :order_date

      t.timestamps
    end
  end
end
