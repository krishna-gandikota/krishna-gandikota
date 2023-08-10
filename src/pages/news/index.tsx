function NewArticleList({articles}:any){

    return (
        <div>
              <h1> VISION IAS</h1>
    {articles?.map((article:any,idx:any)=>(
        <div key={idx}>
           <h4>
            {article.id} {article.name} | {article.email}
           </h4>
        </div>
    )
    )}
   </div> 
    )
}
export default NewArticleList

export async function getServerSideProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');  
  const data = await response.json();

  return {
    props: {
        articles:data,
    },
  };
}