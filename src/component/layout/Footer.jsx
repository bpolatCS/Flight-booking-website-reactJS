function App() {

    
  const [aircrafts, setAircrafts] = useState([]);
  useEffect(() => {
    getAircrafts();
  }, [])

  const getAircrafts = async ()=>{
   const res= await axios.get("https://localhost:7290/api/Aircraft/GetAircrafts");
   setAircrafts(res.data);
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <select className="form-control">
          {aircrafts.map(x=>{
            return  <option value={x.id}>{x.aircraftName + "-"+ x.model}</option>
          })}
         
          
        </select>
      </header>
    </div>
  );
}