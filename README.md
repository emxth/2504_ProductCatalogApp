# 🛒 Product Catalog App

A simple **full-stack web application** for managing a product catalog.  
Built with **ASP.NET Core Web API** (backend) and **React.js** (frontend), using **SQL Server** as the database.  

> **Note:** This project was developed as part of a **software engineering internship assignment** and demonstrates proficiency in:
> - Backend API development
> - Database management
> - Frontend SPA (Single Page Application) development
> - Responsive UI design
> - GitHub project management

---

## ✨ Features

- ➕ **Add new products** with name and price  
- 📋 **View all existing products** in a single-page layout  
- 🛑 **Prevent duplicate product entries**  
- ✅ **Validation** on both backend and frontend  
- 📱 **Responsive design** (desktop, tablet, mobile)  
- 🔄 **Real-time updates** (no page reloads)  

---

## 🏗️ Tech Stack

### Backend
- **ASP.NET Core 8 Web API**
- **Entity Framework Core** (SQL Server provider)
- **SQL Server** (LocalDB or Express)
- **Swagger** (OpenAPI for API documentation)

### Frontend
- **React.js**
- **Bootstrap 5**
- **Axios** (for API calls)

---

## 📂 Project Structure

```
ProductCatalogApp/
├── backend/                # ASP.NET Core Web API
│   ├── Controllers/
│   ├── Models/
│   ├── ProductCatalogAPI.sln
│   └── appsettings.json
└── frontend/               # React app
    ├── src/
    │   ├── components/
    │   │   ├── Notification.js
    │   │   ├── ProductForm.js
    │   │   └── ProductList.js
    │   └── App.js
    ├── public/
    └── package.json
```

---

## ⚙️ Setup Instructions

### 🔹 Backend (ASP.NET Core API)

1. **Open** the `backend/` folder in **Visual Studio 2022**.
2. **Update the connection string** in `appsettings.json`:
   ```json
   "ConnectionStrings": {
     "DefaultConnection": "Server=(localdb)\\MSSQLLocalDB;Database=ProductCatalogDb;Trusted_Connection=True;MultipleActiveResultSets=true"
   }
   ```
   > Replace with your SQL Server instance if needed.

3. **Run EF Core migrations** in the Package Manager Console:
   ```
   Add-Migration InitialCreate
   Update-Database
   ```

4. **Run the API** (press F5 or use the debugger in Visual Studio).

   - API available at: [https://localhost:7073/api/products](https://localhost:7073/api/products)
   - Swagger UI at: [https://localhost:7073/swagger](https://localhost:7073/swagger)

---

### 🔹 Frontend (React)

1. **Open** the `frontend/` folder in **VS Code** or your preferred editor.
2. **Install dependencies**:
   ```
   npm install
   ```
3. **Start the development server**:
   ```
   npm start
   ```
   - App runs on: [http://localhost:3000](http://localhost:3000)

---

## 📝 Notes & Challenges

- Learned how to set up a modern .NET + React full-stack project from scratch.
- Configured CORS in the backend to enable communication between frontend and backend.
- Implemented data validation on both frontend and backend for robust error handling.
- Ensured fully responsive UI using Bootstrap's grid system and utility classes.
- Practiced best practices in organizing code, API design, and GitHub repository management.

---

## 📧 Contact

For questions or feedback, please reach out via [GitHub Issues](https://github.com/emxth/2504_ProductCatalogApp/issues).

---

> _This README was crafted for a professional internship assignment. Thank you for reviewing my work!_
