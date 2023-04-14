export async function getData(){
    try{
        const data = await fetch('https://swapi.dev/api/people/').then(res => res.json());
        console.log(data);
        return data.results;
    }catch(error){
        console.error(error);
    }
}