import Navbar from "@/components/dental/Navbar";
import Hero from "@/components/dental/Hero";
import About from "@/components/dental/About";
import Services from "@/components/dental/Services";
import Booking from "@/components/dental/Booking";
import Testimonials from "@/components/dental/Testimonials";
import Contact from "@/components/dental/Contact";
import Footer from "@/components/dental/Footer";
import Chatbot from "@/components/dental/Chatbot";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Booking />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Index;
