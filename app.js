const empleados =[
    {name: "John", position:"Engenieer", salary:{amount:500, currency:"USD"}},
    {name: "Rose", position:"Designer", salary:{amount:1000, currency:"EUR"}},
    {name: "Carlos" , position:"Developer", salary:{amount:4000, currency:"MXN"}},
    {name: "Emily" , position:"Scrum Master", salary:{amount:500, currency:"EUR"}},
    {name: "Tim" , position:"Engenieer", salary:{amount:500, currency:"USD"}},
    {name: "Maria" , position:"Manager", salary:{amount:15000, currency:"MXN"}},
    {name: "Edward" , position:"Designer", salary:{amount:300, currency:"USD"}},
    {name: "Jeniffer" , position:"Engenieer", salary:{amount:10000, currency:"CAD"}},
    {name: "Jessica" , position:"Devops Engenieer", salary:{amount:700, currency:"EUR"}},
    {name: "Dan" , position:"Product Owner", salary:{amount:42000, currency:"CAD"}},
];


/*1.  Crea una funcion que reciba las lista anyerior y devuelva solo los nombres conforme a lo siguiente
    1.  una con funcion que incluya un loop for
    2. una funcion utlizando el metodo map*/

devolverObj =()=>{
    for(let i=0; i<empleados.length; i++){
        console.log(empleados[i].name);
    }
}
devolverObj();

devolverObjMap=()=>{
    let nombres = nombre => nombre.name;
    let listaMap = empleados.map(nombres);
        console.log(listaMap);

}
devolverObjMap();

/*2. Crea una funcion que reciba la lista anterior y devuelva la lista de los nombres que tienen como e puesto de “Engenieer”.
    1.  una que incluya un loop for
    2. una funcion utlizando el metodo filter*/
devolverObjEngenieer=( )=>{
        for(let i=0; i<empleados.length; i++){

            if(empleados[i].position === "Engenieer"){
                console.log(empleados[i].name + " es ingeniero el chavo");
            }
        }
    }
    devolverObjEngenieer();

devolverObjFilter=( )=>{
        let listaIngenieros = empleados.filter((empleados) => empleados.position =="Engenieer");
        listaIngenieros.forEach(function(ingenieros){
            console.log(ingenieros.name + " son ingenieros tambien")
        });
    
    }
    devolverObjFilter();

/*
3. Crea una funcion que reciba la lista anterior y devuelva la suma de todos los salarios en pesos mexicanos.
    1.  una  que incluya un loop for
    2. una funcion utlizando el metodo reduce
    */
    devolverObSalarios=()=>{
        let total = 0;
        for(let i=0; i<empleados.length; i++){
            if(empleados[i].salary.currency === "MXN"){
                let acc = empleados[i].salary.amount;
                total += acc;
            }
        }
        console.log("el total es: "+total +" pesos mexicanos");
    }
    devolverObSalarios();


    devolverSalariosReduce=()=>{

    let suma = empleados.filter(item=> item.salary.currency ==="MXN").map(item => item.salary.amount).reduce((prev,curr)=> prev+curr,0);
        console.log("la suma essss: " + suma + " pesos mexas");    
    }
    devolverSalariosReduce();
    