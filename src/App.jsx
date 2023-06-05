import logo from './logo.svg';
import './App.css';


const workers = [
  {id:1, name:'Vardan',surname:'Mamikonyan',age:56,sallary: 2000},
  {id:2, name:'Mesrop',surname:'Mashtoc',age:85,sallary: 5000},
  {id:3, name:'Gagik',surname:'Carukyan',age:66,sallary: 10000},
  {id:4, name:'Ara',surname:'Gexecik',age:32,sallary: 4000},
  {id:5, name:'Vladimir',surname:'Putin',age:70,sallary: 50000},
  {id:6, name:'Ashot',surname:'Yerkat',age:42,sallary:6000},
  {id:7, name:'Choban',surname:'Karo',age:26,sallary: 240},
  {id:8, name:'Aylumin',surname:'Ervand',age:32,sallary: 8000},
  {id:9, name:'Aleksandr',surname:'Pushkin',age:37,sallary: 100},
  {id:10, name:'Stepan',surname:'Partamyan',age:56,sallary: 818}]

const sallary = workers.reduce((sum,e)=>{
  sum += e.sallary
  return sum
},0)

function App() {
  return (
    <table id='app-table' border='2px'>
      <thead>
        <tr >
          <th>Name</th>
          <th>Surname</th>
          <th>Age</th>
          <th>Sallary</th>
        </tr>
      </thead>
      <tbody>
       {
        workers.map((e)=>{
          return(
            <tr key={e.id}>
            <td>{e.name}</td>
            <td>{e.surname}</td>
            <td>{e.age}</td>
            <td>{e.sallary}</td>
          </tr>
            )
        })
       }
        <tr>
          <th colSpan={4}>{sallary}</th>

        </tr>
      </tbody>
    </table>
  );
}



export default App;
