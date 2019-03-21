  Vue.component('exercises', {
    props:['bva','ep','co'], /**/
    template: `<div>
              <h4>EP & BVA exercises</h4>
              <p>1 to 5 hours: $10 per hour</p>
              <p>6 to 10 hours: $9 per hour</p>
              <p>More than 10 hours: $7 per hour</p>
                <h3>Equivalence Partitioning</h3>
                 <table border="1">
                 <tr><th>Test data</th> <th>Expected result</th> <th>Actual result</th> <th>Pass/Fail</th></tr>
                <tr v-for="art in ep"> <td>{{art.horas}}</td> <td>{{art.costo}}</td> <td>{{art.result}}</td> <td>{{art.pass}}</td></tr>
                 </table>
                  <h3>Boundary Value Analysis</h3>
                 <table border="1">
                 <tr><th>Test data</th> <th>Expected result</th> <th>Actual result</th> <th>Pass/Fail</th></tr>
                <tr v-for="art in bva"> <td>{{art.horas}}</td> <td>{{art.costo}}</td> <td>{{art.result}}</td> <td>{{art.pass}}</td></tr>
                 </table>
               </div>`
  })
  var app=new Vue({
    el: '#aplicacion',
    data: {
      bva: [{ /* En este vector se crea apartir de los limites que hay entre las particiones*/
              horas: 1, /* limite uno de la primera particion*/
              costo: 10, /*costo de limite de la primera particion */
              result:1*10,
              pass:"pass"
              },{
              horas: 5, /* limite dos de la primera particion*/
              costo: 50, /*costo de limite dos de la primera particion */
              result:5*10,
              pass:"pass"
              },{
              horas: 6, 
              costo: 54,
              result:6*9,
              pass:"pass"
              },{
              horas: 10, 
              costo: 90,
              result:10*9,
              pass:"pass"
              },{
              horas: 11, 
              costo: 77,
              result:11*7,
              pass:"pass"
              }],
              contador:0,
        ep:[{ /* Este vector tiene valores que se encuentra entre los limites de cada particion*/
              horas:3,
              costo:30,
              result:3*10,
              pass:"pass"
            },{
              horas:8,
              costo:72,
              result:8*9,
              pass:"pass"
            },{
              horas:15,
              costo:105,
              result:15*7,
              pass:"pass"            
        }],
        contador:0      
    }
  })
