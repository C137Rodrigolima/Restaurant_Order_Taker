import { AuthProvider } from "./contexts/AuthContext";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Main from "./pages/Main";
import SignIn from "./pages/signIn";
import SignUp from "./pages/signUp";
import WaitPage from "./pages/WaitPage";

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/menu" element={<Main />}/>
          <Route path="/menu/waiting" element={<WaitPage />}/>
        </Routes>
      </Router>
    </AuthProvider>
  );
}
