# ✈️ **Virgin Australia – Flight Booking Platform**

A modern, efficient, and user‑friendly airline booking platform inspired by **Virgin Australia’s premium travel experience**.  
This application provides a seamless end‑to‑end reservation flow, from flight search to secure booking confirmation, built with a clean and contemporary UI aligned with Virgin Australia’s design language.

> **Note:** Replace this logo path with your actual Virgin Australia logo file.  
> `./client/src/assets/virgin-australia-logo.png`

***

## 🚀 **Key Features**

### **Premium Design & Branding**

A refined and professional UI inspired by **Virgin Australia’s signature palette**—red, white, and subtle gradients—to deliver a premium and consistent experience.

### **Complete Reservation Flow**

*   Flight search with filters
*   Seat selection with accurate seat maps
*   Secure checkout experience
*   Real‑time booking confirmation

### **Responsive and Accessible**

Optimized for **mobile-first usage**, ensuring consistent performance across devices and screen sizes.

### **Modern Performance**

*   Real‑time updates
*   Optimized rendering with React & React Query
*   Fast-loading pages using Vite bundling

***

## 🧩 **Tech Stack**

### **Frontend**

*   React.js + TypeScript
*   Tailwind CSS with Virgin Australia–inspired theme
*   shadcn/ui component library
*   React Query for async state
*   React Hook Form + Zod for powerful form validation

### **Backend**

*   Node.js + Express.js
*   PostgreSQL with Drizzle ORM
*   Vite middleware integration

***

## 📦 **Prerequisites**

Ensure these are installed before setup:

*   **Node.js** ≥ 18
*   **npm** ≥ 9
*   **PostgreSQL** ≥ 14

***

## 🛠️ **Local Development Setup**

### **1. Clone the repository**

```bash
git clone https://github.com/yourusername/virgin-australia-booking.git
cd virgin-australia-booking
```

### **2. Install dependencies**

```bash
npm install
```

### **3. Configure environment variables**

Create a `.env` file:

    # Database Configuration
    DATABASE_URL=postgres://yourusername:yourpassword@localhost:5432/virginaustralia

    # Optional — Stripe Payment
    STRIPE_SECRET_KEY=your_stripe_secret_key
    VITE_STRIPE_PUBLIC_KEY=your_stripe_public_key

### **4. Create the database**

```bash
createdb virginaustralia
```

Run migrations:

```bash
npm run db:push
```

### **5. Start development server**

```bash
npm run dev
```

Application runs at:  
👉 **<http://localhost:5000>**

***

## 🗂️ **Project Structure**

    /
    ├── client/                 
    │   ├── src/
    │   │   ├── assets/         
    │   │   ├── components/     
    │   │   ├── hooks/          
    │   │   ├── lib/            
    │   │   ├── pages/          
    │   │   ├── App.tsx         
    │   │   └── main.tsx        
    ├── server/                 
    │   ├── db.ts               
    │   ├── index.ts            
    │   ├── routes.ts           
    │   ├── storage.ts          
    │   └── vite.ts             
    ├── shared/                 
    │   └── schema.ts           
    └── package.json            

***

## 🧭 **How to Use the Application**

1.  **Home Page** – Explore routes, promotions, and recommended destinations
2.  **Flight Search** – Enter travel details for live availability
3.  **Flight Selection** – Compare available flights with pricing
4.  **Seat Map** – Choose seats using an aircraft‑layout interface
5.  **Payment** – Secure checkout or demo payment flow
6.  **Booking Confirmation** – View ticket details instantly

***

## 🎛️ **Testing the Booking Flow**

To quickly simulate a booking:

1.  Search for any route (e.g., Sydney → Melbourne)
2.  Choose a flight
3.  Select seats
4.  Proceed to payment
5.  Click **Quick Demo Pay**
6.  View booking confirmation

***

## 🚀 **Deployment**

### **1. Build the application**

```bash
npm run build
```

### **2. Start production server**

```bash
npm start
```

***

## 🤝 **Contributing**

1.  Fork the repository
2.  Create a feature branch:
    ```bash
    git checkout -b feature/new-feature
    ```
3.  Commit changes:
    ```bash
    git commit -m "Add new feature"
    ```
4.  Push branch:
    ```bash
    git push origin feature/new-feature
    ```
5.  Submit a Pull Request

***

 📄 **License**

Licensed under the **MIT License**.  
Refer to the LICENSE file for details.

***

