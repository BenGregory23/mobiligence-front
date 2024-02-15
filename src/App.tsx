
import Login from "./ui/auth/login";
import { useAuth } from "./hooks/useAuth";
import Register from "./ui/auth/register";
import Header from "./ui/shared/header";

import { Routes } from "react-router";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./ui/home/home";
import CalendarUtilisation from "./ui/vehicule/calendar";
import Landing from "./ui/auth/landing";
import Vehicules from "./ui/vehicule/vehicules";
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';

function App() {
  const { user, setUser, isAuthenticated, setIsAuthenticated } = useAuth();





  return (
    <QueryClientProvider client={new QueryClient()}>
    <Router>
    <div className="App">
      {isAuthenticated ? (
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/calendar" element={<CalendarUtilisation />} />
            <Route path="/vehicules" element={<Vehicules/>} />
          </Routes>
        </div>
      ) : (
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      )}
    </div>
  </Router>
  </QueryClientProvider>
  
  )
}

export default App
