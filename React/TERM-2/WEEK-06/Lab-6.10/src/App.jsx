
function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    localStorage.setItem("my_storage_key", JSON.stringify(data));
  }, [data]);
}
export default App;