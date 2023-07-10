# In the file: db/seeds.rb

# Create Users
User.create!(
  email: "user1@example.com",
  password: "password",
  password_confirmation: "password",
  name: "John Doe",
  nickname: "johndoe",
  image: "https://example.com/avatar.jpg",
  confirmed_at: Time.current
)

User.create!(
  email: "user2@example.com",
  password: "password",
  password_confirmation: "password",
  name: "Jane Smith",
  nickname: "janesmith",
  image: "https://example.com/avatar.jpg",
  confirmed_at: Time.current
)

# Create Categories
Category.create!(
  name: "Electronics"
)

Category.create!(
  name: "Clothing"
)

# Create Products
Product.create!(
  name: "Smartphone",
  description: "A powerful and feature-rich smartphone.",
  price: 999.99,
  image_url: "https://flowbite.com/docs/images/products/apple-watch.png"
)

Product.create!(
  name: "T-Shirt",
  description: "A comfortable and stylish t-shirt.",
  price: 29.99,
  image_url: "https://flowbite.com/docs/images/products/apple-watch.png"
)

# Create Product Categories
ProductCategory.create!(
  product: Product.first,
  category: Category.first
)

ProductCategory.create!(
  product: Product.last,
  category: Category.last
)

# Create ShoppingCart
ShoppingCart.create!(
  user: User.first
)

# Create ShoppingCartItems
ShoppingCartItem.create!(
  shopping_cart: ShoppingCart.first,
  product: Product.first,
  quantity: 2
)

# Create Order
Order.create!(
  user: User.first,
  total_amount: 199.99,
  shipping_address: "123 Main St, Anytown, USA",
  billing_address: "456 Elm St, Anytown, USA",
  order_date: Time.current
)

# Create OrderItems
OrderItem.create!(
  order: Order.first,
  product: Product.first,
  quantity: 1
)

# Create Reviews
Review.create!(
  user: User.first,
  product: Product.first,
  rating: 4,
  review_content: "Great product! Highly recommended."
)

puts "Seed data successfully added."
