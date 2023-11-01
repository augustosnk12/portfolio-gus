import React, { useMemo } from 'react';

import { Header } from './components/Header'
import { Contact } from './components/Contact'
import { Work } from './components/Work'
import { About } from './components/About'
import { UIStore } from './utils/UIStore'
import { Footer } from './components/Footer'

import 'tailwindcss/tailwind.css';

function App() {
  const page = UIStore.useState(s => s.page);

  const currentPage = useMemo(() => {
    switch (page) {
      case 'About':
        return <About />
      case 'Works':
        return <Work />
      case 'Contact':
        return <Contact />
    }
  }, [page])

  return (
    <div className="App">
      <Header />
      {currentPage}
      <Footer />
    </div>
  );
}

export default App;
