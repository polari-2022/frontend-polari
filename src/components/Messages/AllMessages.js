const styles = {
  format: {
    border: 'solid',
    textAlign: 'center',
    padding: '1rem',
    borderRadius: '1rem',
    color: 'white',
  },
  container: {
    padding: '60px',
    margin: 'auto',
    width: '600px',
    height: 'auto',
    border: 'solid',
    borderRadius: '1rem',
    boxShadow: '5px 10px #888888',
    color: 'white',
  },
  header: {
    fontSize: '50px',
    textAlign: 'center',
    color: 'white',
  },
  button: {
    border: 'solid 1px',
    borderRadius: '5px',
    padding: '4px',
    color: 'white',
    // backgroundColor: 
  },
  page: {
    padding: '100px'
  },
}

export default function AllMessages({threads}){
  const chat = (event) => {
    event.preventDefault()
    window.location.replace('/chat')
  }

  return(
    <div style={styles.page}>

      <div style={styles.container} className="bg-teal-600">
        <h1 style={styles.header}>Match Threads</h1>
        {threads.map((thread, index)=>{
          return(
            <div style={styles.format} key={index}>
              <h2>{thread.text}</h2> 
              <button className="bg-teal-700" style={styles.button} onClick={chat}>Thread</button>
            </div>
          )
        })}
      </div>

    </div>
  )
};

