
import './App.css';

const Layout = ({ children }) => {
  return (
    <div className="app-container">
      <nav>Navbar</nav>
      <main className="content">
        {children}
      </main>

      <footer>Footer</footer>
    </div>
  );
};

function App() {
  return (
    <Layout>
      <h1>Hello World</h1>
      <p>This is the page content</p>
    </Layout>
  );
}
export default App