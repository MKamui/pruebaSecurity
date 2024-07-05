import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Interests from "./components/Interests";
import ContactForm from "./components/ContactForm";


export default function Home() {
  return (
    <main className="flex min-h-screen max-w-screen-2xl w-full flex-col items-center">
      <Navbar/>
      <Header/>
      <About/>
      <Interests/>
      <ContactForm/>
    </main>
  );
}
