

export default function AllMessages({threads}){
  return(

    <div>
      {threads.map((thread, index)=>{
        return(
          <div key={index}>
            {thread.text}                    
          </div>
        )
      })}
    </div>
  
  )
};

