# Todo App - Next.js + TypeScript

A modern, feature-rich todo application built with Next.js 16, TypeScript, and React Context API for state management. This app provides a clean interface for managing your daily tasks with persistent local storage.

## ✨ Features

- **Add New Todos**: Create new tasks with a simple form interface
- **Mark as Complete**: Check/uncheck todos to mark them as completed
- **Delete Completed Todos**: Remove tasks that are finished
- **Filter Todos**: View all, active, or completed todos separately
- **Persistent Storage**: Todos are saved in browser's localStorage
- **TypeScript**: Full type safety throughout the application
- **Responsive Design**: Works on all device sizes
- **Context API**: Efficient state management with React Context

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository or navigate to the project directory
2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 🏗️ Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with TodosProvider
│   ├── page.tsx           # Main page component
│   └── globals.css        # Global styles
├── components/
│   ├── add-todo.tsx       # Form component for adding new todos
│   ├── navbar.tsx         # Navigation for filtering todos
│   └── todos.tsx          # Todo list display component
├── store/
│   └── todos.tsx          # Context API store for todo management
└── public/               # Static assets
```

## 🎯 How to Use

### Adding Todos

1. Type your task in the input field
2. Click "Add" button or press Enter
3. Your todo will appear at the top of the list

### Managing Todos

- **Complete a todo**: Click the checkbox next to any todo
- **Delete a todo**: Click the "[Delete]" button (only appears on completed todos)
- **Filter todos**: Use the navigation bar to view:
  - **All**: Shows all todos
  - **Active**: Shows only uncompleted todos
  - **Completed**: Shows only completed todos

### Data Persistence

All todos are automatically saved to your browser's localStorage, so they persist between sessions.

## 🛠️ Technical Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Context API
- **Icons**: React Icons
- **Storage**: Browser localStorage

## 📁 Key Components

### TodosProvider (`store/todos.tsx`)

- Manages global todo state using React Context
- Handles CRUD operations (Create, Read, Update, Delete)
- Provides localStorage persistence
- Type-safe with TypeScript interfaces

### AddTodo Component

- Form for creating new todos
- Input validation and state management
- Integrates with global todo context

### Todos Component

- Displays filtered todo list
- Handles todo completion toggling
- Manages todo deletion for completed items

### Navbar Component

- Navigation for filtering todos
- URL-based filtering with search parameters
- Active state indicators

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality

## 📱 Features in Detail

### State Management

The app uses React Context API for efficient state management, providing:

- Centralized todo state
- Type-safe operations
- Automatic localStorage synchronization

### URL-based Filtering

Filter states are reflected in the URL using search parameters:

- `/` - All todos
- `/?todos=active` - Active todos only
- `/?todos=completed` - Completed todos only

### Type Safety

Full TypeScript implementation with:

- Defined interfaces for Todo items
- Type-safe context operations
- Props and state typing throughout

## 🚀 Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 📚 Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [TypeScript Documentation](https://www.typescriptlang.org/docs/) - TypeScript handbook
- [React Context API](https://react.dev/reference/react/useContext) - State management with Context
- [Tailwind CSS](https://tailwindcss.com/docs) - Utility-first CSS framework
