# Roam & Relish

A sophisticated web application that combines travel experiences with coffee culture, offering users an immersive journey through global destinations and their unique coffee traditions.

## 🚀 Features

- Interactive destination exploration
- Detailed coffee culture insights
- Responsive design with modern UI components
- Dynamic content loading
- Mobile-friendly interface

## 🛠️ Tech Stack

- **Frontend:**
  - React with TypeScript
  - Vite for build tooling
  - TailwindCSS for styling
  - Shadcn UI components
  - React Query for data fetching

- **Backend:**
  - Node.js server
  - Drizzle ORM for database operations
  - TypeScript for type safety

## 📁 Project Structure

```
├── client/                 # Frontend application
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/        # Application pages
│   │   ├── data/         # Static data and configurations
│   │   ├── hooks/        # Custom React hooks
│   │   └── lib/          # Utility functions and configurations
├── server/                # Backend application
│   ├── routes.ts         # API route definitions
│   └── storage.ts        # Data storage logic
└── shared/               # Shared types and schemas
```

## 🚦 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/ahujar89/Roam-Relish.git
   cd Roam-Relish
   ```

2. **Install dependencies**
   ```bash
   # Install root dependencies
   npm install

   # Install client dependencies
   cd client
   npm install

   # Install server dependencies
   cd ../server
   npm install
   ```

3. **Start the development servers**
   ```bash
   # Start the backend server
   npm run server

   # In a new terminal, start the frontend
   npm run client
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to see the application running.

## 🎨 Design Guidelines

The project follows a consistent design system using Shadcn UI components and custom styling with TailwindCSS. Refer to `design_guidelines.md` for detailed styling information.

## 📱 Responsive Design

The application is fully responsive and supports:
- Desktop monitors
- Tablets
- Mobile devices

Custom hooks like `useMobile` help manage responsive behavior across the application.

## 🔄 Available Scripts

- `npm run dev` - Start both client and server in development mode
- `npm run build` - Build both client and server
- `npm run lint` - Run ESLint for code quality
- `npm run test` - Run test suites

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📜 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Shadcn UI for the beautiful component library
- TailwindCSS for the utility-first CSS framework
- Vite for the blazing fast build tool