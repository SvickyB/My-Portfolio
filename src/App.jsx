import Home from './Components/Home/Home'
import About from './Components/About/About'
import Experience from './Components/Experience/Experience'
import Projects from './Components/Projects/Projects'
import Contact from './Components/contact/Contact'
import Layout from './Components/layout/Layout'

const App = () => {
  return (
    <Layout>
      <Home />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </Layout>
  );
};
export default App;