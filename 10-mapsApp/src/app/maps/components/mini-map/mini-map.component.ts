import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { LngLat, Map, Marker } from 'mapbox-gl'

@Component({
  selector: 'map-mini-map',
  templateUrl: './mini-map.component.html',
  styleUrls: ['./mini-map.component.css']
})
export class MiniMapComponent implements AfterViewInit {  

  @Input() lngLat?: [number, number];

  @ViewChild('map') divMap?: ElementRef;

  public map?: Map;

  ngAfterViewInit(): void {
    if (!this.divMap) throw 'El elemento HTML no fue encontrado';
    if (!this.lngLat) throw 'LngLat no puede ser nulo'

    //mapa
    const [ lng, lat ] = this.lngLat;
    const objLngLat = new LngLat(lng, lat);
    this.map = new Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: objLngLat,
      zoom: 15,
      interactive: false
    });

    //marker
    const color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));
    const marker = new Marker({
      color,
      draggable: false
    }).setLngLat(objLngLat);
    marker.addTo(this.map);
  }
}
