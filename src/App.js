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

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/menu" element={<Main />}/>
          <Route path="/menu/waiting" element={<WaitPage />}/>
          <Route path="/adm/signin" element={<AdmSignIn />} />
          <Route path="/adm/kitchen" element={<Kitchen />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}
