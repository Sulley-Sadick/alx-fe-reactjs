///////////////////////////////// IMPORTS ///////////////////////////////
import "./App.css";
import WelcomeMessage from "./components/WelcomeMessage.jsx";
import Header from "./components/Header.jsx";
import MainContent from "./components/MainContent.jsx";
import Footer from "./components/Footer.jsx";
import UserProfile from "./components/UserProfile.jsx";
import ProfilePage from "./components/ProfilePage.jsx";
import UserContext from "./components/UserContext.js";
function App() {
  const userData = {
    name: "Jane Doe",
    email: "janedoe.email.com",
  };
  return (
    <div>
      <WelcomeMessage />
      <Header />
      <MainContent />
      <Footer />
      <UserContext.Provider value={userData}>
        <ProfilePage />
      </UserContext.Provider>
      <UserProfile name={"Alice"} age={25} bio={"Loves hiking and photography."} />
    </div>
  );
}

export default App;
