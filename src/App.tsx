import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./presentation/context/AuthContext";
import { ProfileProvider } from "./presentation/context/ProfileContext";
import { BillingProvider } from "./presentation/context/BillingContext";
import { PrivateRoute } from "./presentation/routes/PrivateRoute";
import { RoleBasedRoute } from "./presentation/routes/RoleBasedRoute";
import { Navbar } from "./presentation/components/shared/Navbar";
import { Footer } from "./presentation/components/shared/Footer";

// Auth Pages
import Login from "./presentation/pages/auth/Login";
import Signup from "./presentation/pages/auth/Signup";
import ResetPassword from "./presentation/pages/auth/ResetPassword";
import UpdatePassword from "./presentation/pages/auth/UpdatePassword";

// Main Pages
import Dashboard from "./presentation/pages/dashboard/Dashboard";
import ManageBilling from "./presentation/pages/billing/ManageBilling";
import EditProfile from "./presentation/pages/profile/EditProfile";

// Error Pages
import NotFound from "./presentation/pages/error/NotFound";
import ServerError from "./presentation/pages/error/ServerError";

// Toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App: React.FC = () => {
  return (
    <AuthProvider>
      <ProfileProvider>
        <BillingProvider>
          <Router>
            <Navbar />
            <Routes>
              {/* Public Routes */}
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/reset-password" element={<ResetPassword />} />
              <Route path="/update-password" element={<UpdatePassword />} />

              {/* Protected Routes */}
              <Route element={<PrivateRoute />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/billing" element={<ManageBilling />} />
                <Route path="/profile" element={<EditProfile />} />
              </Route>

              {/* Role Based Example (optional) */}
              <Route element={<RoleBasedRoute requiredRole="admin" />}>
                {/* <Route path="/admin" element={<AdminDashboard />} /> */}
              </Route>

              {/* Error Pages */}
              <Route path="/500" element={<ServerError />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />

            {/* Toast Notifications */}
            <ToastContainer
              position="top-right"
              autoClose={4000}
              hideProgressBar={false}
              newestOnTop
              closeOnClick
              pauseOnHover
              draggable
              pauseOnFocusLoss
              theme="light" // You can change to "dark" if you prefer
            />
          </Router>
        </BillingProvider>
      </ProfileProvider>
    </AuthProvider>
  );
};

export default App;
