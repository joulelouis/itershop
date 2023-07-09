
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen'

const App = () => {

  return (

    // Fragments <>
    // used if have more than one(1) components
    <>

      <Header />

      <main classname="py-3">
        <Container>
          <HomeScreen />
        </Container>
      </main>
      
      <Footer />
    </>
  )
};

export default App;
