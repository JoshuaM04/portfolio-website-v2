import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="flex flex-col min-h-dvh bg-ink-950 font-body">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}
