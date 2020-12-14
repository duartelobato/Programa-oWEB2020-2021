
window.onload = async function(){
    console.log("cheguei aqui")
   
    try {
        let estados = await $.ajax({
            url: "http://localhost:3001/api/estados",
            method: "get",
            dataType: "json"
        });
        
        let id;
        for (i=0;i<estados.length;i++){
            console.log(estados[i].pac_estado);
            switch(estados[i].pac_estado){
                case 'nada':
                    id = i+1;
                    document.getElementById(id.toString()).style.backgroundColor = 'lightgrey';
                    break;
                case 'ALTA':
                    id = i+1;
                    document.getElementById(id.toString()).style.backgroundColor = 'green';
                    console.log(document.getElementById(id.toString()).style.backgroundColor);
                    break;
                case 'ESTAVEL':
                    id = i+1;
                    document.getElementById(id.toString()).style.backgroundColor = 'yellow';
                    console.log(document.getElementById(id.toString()).style.backgroundColor);
                    break;  
                case 'GRAVE':
                    id = i+1;
                    document.getElementById(id.toString()).style.backgroundColor = 'red';
                    console.log(document.getElementById(id.toString()).style.backgroundColor);
                    break;
                default:
                    console.log('error in getting state'); 
            }
         
        }

      
    } catch(err) {
        console.log(err);
        
    }
}