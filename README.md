# Ejercicios Desarrollo de interfaces DAM
## Realiza los siguientes ejercicios en React y con JSX .

 

### Ejercicio 1 
Crea el componente Saludo y el componente Despedida donde cada uno devuelva respectivamente  un mensaje de saludo y otra de despedida con el nombre del usuario. En el componente App.js añade una constante que inicialmente está a true. Este componente devuelve el mensaje de entrada en caso de que la constante esté a true . En caso de que la constante esté a false devuelve el mensaje de despedida.


### Ejercicio 2
 crea un componente que tenga un array con los siguientes datos : 

[{Matricula: '1425BTY'; Marca: 'Peugeot', Modelo:'3008', Tipo:'híbrido}, {Matricula: '1762MNY'; Marca: 'Mercedes', Modelo:'EQS', Tipo:'Diesel'},{Matricula: '9882TPK'; Marca: 'Renault', Modelo:'4 E-Tech', Tipo:'Eléctrico'}, 

{Matricula: '6634TRV'; Marca: 'Volswagen', Modelo:'Golf', Tipo:'Gasolina'}, 

{Matricula: '2285RPL'; Marca: 'Toyota', Modelo:'RAV4', Tipo:'hibrido'}, 

{Matricula: '1782PRT'; Marca: 'Peugeot', Modelo:'5008', Tipo:'diesel'}]. 

EL componente App debe devolver un listado con todos los datos de los coches con  formato  equivalente al siguiente: 

<div class="StyledTextComponent"> 1111BTY - 5008 Peugeot (diesel) </div>

Con valor del estilo 

.StyledTextComponent{

 font-family: "Inter", sans-serif;

 padding-left: .5rem;

background-color: #369;

color: #fff;
}