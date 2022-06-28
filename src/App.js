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
import AdmSignIn from "./pages/AdmSignIn";
import Kitchen from "./pages/Kitchen";
import About from "./pages/About";

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Main />}/>
          <Route path="/menu/waiting" element={<WaitPage />}/>
          <Route path="/adm/signin" element={<AdmSignIn />} />
          <Route path="/adm/kitchen" element={<Kitchen />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}
