import { db } from "./db";
import { productsTable, salesTable } from "./schema";

export async function seed() {
  console.log("Seeding database...");

  //inesrt products
  await db.insert(productsTable).values([
    {
      name: "Laptop",
      category: "Electronics",
      price: 999.99,
      stock: 10,
    },
    {
      name: "Mouse",
      category: "Electronics",
      price: 25.99,
      stock: 200,
    },
    {
      name: "Keyboard",
      category: "Electronics",
      price: 75.0,
      stock: 150,
    },
    {
      name: "Monitor",
      category: "Electronics",
      price: 299.99,
      stock: 30,
    },
    {
      name: "Desk Chair",
      category: "Furniture",
      price: 199.99,
      stock: 50,
    },
    {
      name: "Desk",
      category: "Furniture",
      price: 399.99,
      stock: 30,
    },
    {
      name: "Notebook",
      category: "Stationery",
      price: 5.99,
      stock: 500,
    },
    {
      name: "Pen Set",
      category: "Stationery",
      price: 12.99,
      stock: 300,
    },
  ]);

  //insert sales
  await db.insert(salesTable).values([
    {
      product_id: 1,
      quantity: 2,
      total_amount: 1999.98,
      customer_name: "John Doe",
      region: "North America",
    },
    {
      product_id: 2,
      quantity: 5,
      total_amount: 129.95,
      customer_name: "Jane Smith",
      region: "Europe",
    },
    {
      product_id: 3,
      quantity: 3,
      total_amount: 225.0,
      customer_name: "Alice Johnson",
      region: "Asia",
    },
    {
      product_id: 4,
      quantity: 1,
      total_amount: 299.99,
      customer_name: "Bob Brown",
      region: "North America",
    },
    {
      product_id: 5,
      quantity: 4,
      total_amount: 799.96,
      customer_name: "Charlie Davis",
      region: "Europe",
    },
    {
      product_id: 6,
      quantity: 2,
      total_amount: 799.98,
      customer_name: "Diana Evans",
      region: "Asia",
    },
    {
      product_id: 7,
      quantity: 10,
      total_amount: 59.9,
      customer_name: "Ethan Wilson",
      region: "North America",
    },
    {
      product_id: 8,
      quantity: 15,
      total_amount: 194.85,
      customer_name: "Fiona Garcia",
      region: "Europe",
    },
  ]);

  console.log("Database seeded successfully!");
}

seed();
