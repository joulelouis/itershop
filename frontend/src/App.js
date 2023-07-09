
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';



const App = () => {

  return (

    // Fragments <>
    // used if have more than one(1) components
    <>

      <Header />

      <main classname="py-3">
        <Container>
          {/*<HomeScreen />*/}
          <Outlet />
        </Container>
      </main>
      
      <Footer />
    </>
  )
};

export default App;
