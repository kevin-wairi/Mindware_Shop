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

user1 = User.first
user2 = User.second

product1 = Product.first
product2 = Product.second

Cart.create(user: user1, product: product1, quantity: 2)
Cart.create(user: user2, product: product1, quantity: 1)

puts "Seed data successfully added."
