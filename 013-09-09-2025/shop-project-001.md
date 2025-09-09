# Project Requirements Document (PRD)

**Project Name:** Simple Shop Management System  
**Version:** 1.0  
**Date:** 06-09-2025  
**Prepared by:** Eng. Ramy Kamal  

---

## 1. Purpose
The purpose of this project is to create a simple web-based shop management system that allows:
- One employee to store and update items with details such as **category, photos, and price**.
- Other employees to receive and manually manage **customer orders**.

The system aims to simplify product registration, organize shop inventory, and support efficient handling of customer orders without requiring advanced automation.

---

## 2. Background
Currently, the shop has a very basic manual workflow:
- Products are recorded in spreadsheets or on paper.
- Orders from customers are handled manually without central tracking.
- No unified system exists to store item details or manage orders.

The web system will provide a **central platform** for item storage and order management. This reduces errors, improves accessibility, and ensures consistency in the shop’s operations.

---

## 3. Scope

### 3.1 In-Scope
- Web-based system (desktop-first, responsive for mobile).
- User roles:
  - **Item Manager (single employee):** Add/edit/delete items with category, photos, and price.
  - **Order Managers (other employees):** View, update, and mark customer orders as processed.
- Product catalog management (with categories and photos).
- Manual order handling (receive orders, update status).
- Simple reporting (list of orders, product availability).

### 3.2 Out-of-Scope
- Payment gateway integration.
- Automatic stock deduction.
- Online customer-facing storefront.
- Shipping or delivery tracking.

## 3.3 User Roles

- **Item Manager**
  - Role: Manages product catalog
  - Responsibilities:
    - Add new items with category, price, and photos
    - Edit or delete items
    - Organize categories

- **Order Manager**
  - Role: Handles customer orders manually
  - Responsibilities:
    - View new customer orders
    - Update order status (*Pending, In Progress, Completed*)
    - Assign or close orders

- **Shop Owner**
  - Role: Oversees system usage and reporting
  - Responsibilities:
    - View reports of products and orders
    - Monitor employee activities
    - Ensure smooth operation
    - manage users

---

## 4. Functional Requirements

### 4.1 User Management
- Login system for employees.
- Roles: Item Manager vs Order Managers.

### 4.2 Item Management (Item Manager only)
- Add new items with:
  - **Category** (select or create).
  - **Item name**.
  - **Price**.
  - **Photos** (upload multiple).
- Edit and delete items.
- View all items in a structured catalog.

### 4.3 Order Management (Order Managers only)
- View all incoming customer orders.
- Update order details (status: *Pending, In Progress, Completed*).
- Assign orders to employees if needed.
- View order history.

### 4.4 Reports
- Product list with filters (by category, price).
- Order list with filters (by date, status).

---

## 5. Non-Functional Requirements
- **Technology stack:** Node.js + Express, MongoDB, EJS (or React for frontend if needed).
- **Performance:** Support up to 10 concurrent users.
- **Security:** Role-based access, secure password storage.
- **Scalability:** Allow adding more roles in the future.
- **Usability:** Simple UI, minimal training required.

---

## 6. User Stories
- *As an Item Manager, I want to upload product photos so employees can view them when handling orders.*
- *As an Order Manager, I want to see pending orders in one list so I can process them efficiently.*
- *As an Order Manager, I want to mark an order as completed so the system reflects real-time status.*
- *As the shop owner, I want to see reports of items and orders so I can track performance.*

---

## 7. Success Metrics
- All items are stored digitally with correct categories and photos.
- Employees can view and update orders without errors.
- Order processing time reduced by at least 30%.
- Zero data loss during employee turnover.

---

## 8. Constraints
- Budget and resources limited (simple system only).
- Single branch, single shop.
- Internet connection required.

---

## 9. Assumptions
- Only internal employees will use the system (no direct customer access).
- Orders are received from outside (phone, chat, or walk-in) and entered manually into the system.

---

## 10. Open Questions
- Should categories be predefined (e.g., *Electronics, Clothes*) or created dynamically by the Item Manager?
- Should employees receive notifications (email, SMS) when new orders arrive?
- Is there a need for a product stock count (inventory tracking)?


-------------------

database schema :

- user
    - _id
    - fullname
    - username
    - password
    - userRole
    - isActive
- products
    - _id
    - productName
    - price
    - photo
    - category
      - categoryID
      - categoryName
- categories
    - _id
    - categoryName
- orders
    - _id
    - customer
      - customerName
      - customerPhone
      - customerAddress
    - products []
      - productID
      - ProductName
      - quanttity
      - peicePrice
    - status
      - statusName
      - statusDateTime
    - orderDateTime


