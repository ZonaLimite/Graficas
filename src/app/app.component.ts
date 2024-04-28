import { Component } from '@angular/core';
import { Color, ScaleType} from '@swimlane/ngx-charts';
import { FaultsService } from './services/faults.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
   interval: number;

  //Inyeccion de dependencia del servicio
  constructor(private faultsService: FaultsService){
    this.interval=0;
  }

  ngOnInit(){
    /*setInterval(() =>{
      this.faultsService.faultsDataFromRest();
      this.interval++;
    }, 3000);*/
  }

  //La propiedad single apunta a un metodo  del servcio
  //para obtener la data de la grafica
  get single(){
    return this.faultsService.dataOfService;
  }

  onRandomData(){
    this.faultsService.randomData();
  }

  view: [number,number] = [940, 200];
  // options grafica
   animations = true;
   showXAxis = true;
   showYAxis = true;
   gradient = false;
   showLegend = false;
   showXAxisLabel = true;
   xAxisLabel = 'Salidas Nivel AF';
   showYAxisLabel = true;
   yAxisLabel = 'Fallos Stop Devices';
   yMax =3;
   padding=1;
   showGridLines = true;
   schemeType = ScaleType.Linear;
   colorScheme: Color = {
       //domain: ['#00FF00','#00AA00', '#00DD00','#FF0000'],
       domain: ['#00FF00','#FF0000'],
       group: ScaleType.Linear,
       selectable: true, // => boolean (true / false)
       name: 'Customer Usage',
   };


   onSelect(event: any) {
     console.log(event);
   }
 }
