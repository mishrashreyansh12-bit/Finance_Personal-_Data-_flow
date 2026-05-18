// Run once: node seedAdmin.js
// Creates the admin account. Delete this file after running.

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("./models/User");

const ADMIN_EMAIL = "mishrashreyansh12@gmail.com";
const ADMIN_PASSWORD = "Admin@123";  // <-- apna password yahan set karo
const ADMIN_NAME = "Shreyansh Mishra";

async function seedAdmin() {
  await mongoose.connect("mongodb://127.0.0.1:27017/financeDB");

  // Delete any existing user with this email
  await User.deleteOne({ email: ADMIN_EMAIL });

  const hashedPassword = await bcrypt.hash(ADMIN_PASSWORD, 10);

  await User.create({
    name: ADMIN_NAME,
    email: ADMIN_EMAIL,
    password: hashedPassword,
    role: "admin",
  });

  console.log("✅ Admin created successfully!");
  console.log("   Email:", ADMIN_EMAIL);
  console.log("   Password:", ADMIN_PASSWORD);
  console.log("   Role: admin");

  await mongoose.disconnect();
  process.exit(0);
}

seedAdmin().catch(console.error);
