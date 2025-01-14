import React, { useEffect, useState } from "react";
import Authpage from "./main_pages/Authpage";
import Dashboard from "./main_pages/Dashboard";

import "./App.css";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    setIsLogin(true);
  }, []);

  if (isLogin) {
    return <Dashboard />;
  } else {
    return <Authpage setIsLogin={setIsLogin} />;
  }
}

export default App;
