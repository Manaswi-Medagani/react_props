import { ProductsData } from "../Data/Products"
import Button from "./Button"
import Card from "./Cards"

const Products = ()=> {
    const styles={
        color:"whitesmoke",
        backgroundcolor:"green"
    }
    return(
        <>
        <Button Value = "Add Student" styles={styles}/>
          {ProductsData.map((v,i)=>{
            <>
              <Card name="Products" obj={v} index={i}/>
            </>
          })}
        </>
    )
}
export default Products