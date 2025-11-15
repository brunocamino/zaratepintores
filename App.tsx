
import React, { useState, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import QuoteForm from './components/QuoteForm';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ColorAssistant from './components/ColorAssistant';

export type View = 'home' | 'gallery' | 'quote' | 'contact' | 'assistant';

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<View>('home');

  const galleryRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const assistantRef = useRef<HTMLDivElement>(null);

  const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const handleNavClick = (view: View) => {
      setActiveView('home'); // Switch to home view to show all sections
      setTimeout(() => { // Allow state to update before scrolling
          switch(view) {
              case 'gallery':
                  scrollToRef(galleryRef);
                  break;
              case 'quote':
                  scrollToRef(quoteRef);
                  break;
              case 'contact':
                  scrollToRef(contactRef);
                  break;
              case 'assistant':
                  scrollToRef(assistantRef);
                  break;
              default:
                   window.scrollTo({ top: 0, behavior: 'smooth' });
          }
      }, 100);
  };


  return (
    <div className="bg-black min-h-screen">
      <Header onNavClick={handleNavClick} />
      <main>
        <Hero onQuoteClick={() => scrollToRef(quoteRef)} />
        <About />
        <div ref={galleryRef}>
            <Gallery />
        </div>
        <div ref={assistantRef}>
            <ColorAssistant />
        </div>
        <div ref={quoteRef}>
            <QuoteForm />
        </div>
        <div ref={contactRef}>
            <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
