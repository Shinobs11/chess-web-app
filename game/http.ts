

export async function postData(data:Object){
    console.log(JSON.stringify(data));
    try{
    const response = await fetch(
        "http://localhost:3001",
        {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
    )
    return response.json();
    }
    catch(e){
        console.error(e);
    }
    
}
