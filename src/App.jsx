
import './App.css'
import Button from './Components/Button'
import Cards from  './Components/Cards'
import Products from './Components/Products'
import {data} from './Data/Data'

function App() {
  const styles={
    color_styles:{
      color:"whitesmoke",
     backgroundColor:"red"
      }

    }
 

  return (
    <>
  <Button Value = {"Add Student"} styles={styles}/>
    
     {
      data.map((v,i)=> {
        return(
          <>
          <Cards name={"Manaswi"} obj={v} index={i}/>
          </>
        )
      })
    }
    <Products/>
  </>
  )
}
      

export default App
