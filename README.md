# Finance Backend API

## Overview
This project is a backend system for managing financial records with role-based access.

## Tech Stack
- Node.js
- Express.js
- MongoDB

## Features
- User Register & Login
- Role-based Access (Admin, Analyst, Viewer)
- Financial Records (Income/Expense)
- Dashboard Summary

## APIs

POST /api/auth/register  
POST /api/auth/login  

POST /api/records  
GET /api/records  

GET /api/dashboard/summary  

## How to Run

1. Install:
npm install

2. Run:
node server.js

3. Test using Postman