# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/18d963c4-5f24-4627-82a8-1ad51be4ea48

## Component Library Usage

This project includes several reusable React components that you can integrate into your existing React projects.

### Installation

1. First, ensure you have the required dependencies:

```bash
npm install lucide-react tailwindcss @types/react @types/react-dom
```

2. Configure Tailwind CSS in your project following the [official installation guide](https://tailwindcss.com/docs/installation).

3. Copy the component files you need from the `src/components/ui` directory to your project.

### Available Components

#### ScrollTabs
A responsive horizontal tab component with overflow handling:

```tsx
import { ScrollTabs } from './components/ui/scroll-tabs';
import { Package } from 'lucide-react';

function MyComponent() {
  const items = [
    { label: "Tab 1" },
    { label: "Tab 2", icon: <Package className="w-4 h-4" /> },
  ];

  return (
    <ScrollTabs 
      items={items}
      activeIndex={0}
      onTabChange={(index) => console.log('Tab changed:', index)}
    />
  );
}
```

#### CustomAlert
A customizable alert component with different variants:

```tsx
import { CustomAlert } from './components/ui/custom-alert';

function MyComponent() {
  return (
    <CustomAlert 
      variant="success" // or "info", "warning"
      message="Your message here"
    />
  );
}
```

#### Rating
A star rating display component:

```tsx
import { Rating } from './components/ui/rating';

function MyComponent() {
  return (
    <Rating 
      value={4}
      topLabel="Rating Label"
      levelText="Great"
      levelDescription="Above average rating"
    />
  );
}
```

### Component Props

#### ScrollTabs Props
- `items`: Array of `{ label: string, icon?: React.ReactNode }`
- `activeIndex`: Optional number for the active tab
- `onTabChange`: Optional callback function when tab changes
- Additional HTML div props are supported

#### CustomAlert Props
- `variant`: "success" | "info" | "warning"
- `message`: string
- Additional HTML div props are supported

#### Rating Props
- `value`: number (0-5)
- `topLabel`: Optional string
- `levelText`: Optional string
- `levelDescription`: Optional string
- `maxStars`: Optional number (default: 5)
- Additional HTML div props are supported

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/18d963c4-5f24-4627-82a8-1ad51be4ea48) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with .

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/18d963c4-5f24-4627-82a8-1ad51be4ea48) and click on Share -> Publish.

## I want to use a custom domain - is that possible?

We don't support custom domains (yet). If you want to deploy your project under your own domain then we recommend using Netlify. Visit our docs for more details: [Custom domains](https://docs.lovable.dev/tips-tricks/custom-domain/)
