export default function Users({data,id}) {
    return (<>
        {data ? (
        
                            <p>
                                {data.firstName} {data.lastName}
                            </p>
        
                    ) : (
                        <div>Carregando...</div>
                    )}
        
        
        
         </>)

}
export async function getServerSideProps(context){
    const {id}= context.params
    const res = await fetch(`http://localhost:3000/api/users/${id}`)
    const data = await res.json()
    
    return {props:{data,id}}
  
  }
  