// components
import Navbar from './Navbar';
import CartContainer from './CartContainer';
import { useGlobalContext } from './context';

function App() {
  // console.log(useGlobalContext());
  const { loading } = useGlobalContext();

  if (loading) {
    return (
      <main style={{ textAlign: 'center', marginTop: '5rem' }}>
        <div className="loading"></div>
        <h3 style={{ marginTop: '2rem' }}>Laoding...</h3>
      </main>
    );
  }

  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
