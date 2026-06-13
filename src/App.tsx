import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="flex flex-col min-h-dvh font-shareTech">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}