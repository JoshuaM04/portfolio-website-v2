import Header from './components/Header'
import Main from './components/Main'

export default function App() {
  return (
    <div className="flex flex-col gap-50 min-h-dvh p-5">
      <Header />
      <Main />
    </div>
  );
}