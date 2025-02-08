const Cards = ({name,obj,index})=>{
   

   return(
      <>
      <h1>Name is : {name}</h1>
      <div key={index}>
         <h1>{obj.name}</h1>
         <h1>{obj.model}</h1>
      </div>
      </>
   )


}

export default Cards