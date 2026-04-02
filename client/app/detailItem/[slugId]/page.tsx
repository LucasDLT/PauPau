 export default async function Detail ({params}:{params:Promise<{slugId:string}>}){
    const {slugId}= await params
    console.log(slugId);
    console.log(params);
    
    return (
        <div>
            <h1>Detail Item {slugId}</h1>
        </div>
    );
}

