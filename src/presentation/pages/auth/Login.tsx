// src/presentation/pages/auth/Login.tsx
import { Link } from 'react-router-dom';
// Corrected Imports: Import directly from the ui directory
// Card and its sub-components are exported via ui/index.ts -> ui/atoms/index.ts -> ui/atoms/card.tsx
import { Card, CardHeader, CardContent, CardFooter } from "../../ui/atoms";
import { LoginForm } from '../../components/auth/LoginForm'; // This import remains the same
import { OAuthButtons } from '../../components/auth/OAuthButtons'; // This import remains the same
// Input and Button are also available but might not be used directly in the page component itself,
// as they are used within LoginForm and OAuthButtons.

export default function LoginPage() {
  return (
    // Use a container for full page layout
    <div className="flex min-h-screen items-center justify-center bg-gray-100 dark:bg-gray-900"> // Example background
      {/* Use the styled Card component */}
      <Card className="w-full max-w-md p-6 space-y-6">
        {/* Use the styled CardHeader component */}
        <CardHeader className="text-center">
          {/* Add Logo */}
          <h1 className="text-3xl font-bold">App Name</h1>
          <p className="text-muted-foreground">Sign in to your account</p>
        </CardHeader>

        {/* Use the styled CardContent component */}
        <CardContent className="space-y-4">
          <LoginForm /> {/* Contains email/password form logic and inputs */}

          <div className="relative"> {/* Or separator */}
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-gray-300 dark:border-gray-700"></span>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-card px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>

          <OAuthButtons /> {/* Contains Google/GitHub buttons */}
        </CardContent>

        {/* Use the styled CardFooter component */}
        <CardFooter className="flex justify-between text-sm">
           <Link to="/signup" className="text-blue-600 hover:text-blue-800">
             Don&apos;t have an account? Sign up
           </Link>
           <Link to="/reset-password" className="text-blue-600 hover:text-blue-800">
             Forgot Password?
           </Link>
         </CardFooter>
      </Card>
    </div>
  );
}