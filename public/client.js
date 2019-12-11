async function getData(){
    try {
        const response=await fetch("http://localhost:3000/api/todos");
        if (response.status >= 400){
            throw new Error("API not reachable!");
        }
        const data=await response.json();

        data.forEach(element => {
            const newDiv=document.createElement("div");
            const newContent=document.createTextNode(element.name);
            newDiv.appendChild(newContent);
            document.getElementById("container").appendChild(newDiv);
        });
    } catch (error) {
        console.log("error occurred:",error);
        alert("Error: "+error);
    }
    
}