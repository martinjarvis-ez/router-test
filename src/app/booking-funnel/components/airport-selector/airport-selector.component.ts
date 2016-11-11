import { Component, OnInit, OnDestroy, Input,  Output, EventEmitter } from '@angular/core';
import { AirportService } from '../../services/index';
import { Subscription } from 'rxjs/Subscription';
import { Airport, Country, AirportsResult } from '../../models/index';

@Component({
  selector: 'airport-selector',
  templateUrl: './airport-selector.component.html',
  styleUrls: ['./airport-selector.component.scss']
})
export class AirportSelectorComponent implements OnInit, OnDestroy {

  @Input() counterpart: string;
  @Input() existingSelection: string;
  @Output() airportSelected = new EventEmitter();
  private  airports: Airport[];

  private subscription: Subscription;

  constructor(private airport: AirportService) { }

  ngOnInit() {
    this.subscription = this.airport.airports.subscribe((results: Airport[]) => this.updateResults(results));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private updateResults(results: Airport[]) {
    this.airports = results;
  }

  select(selection:Airport){
    this.airportSelected.emit(selection);
    this.existingSelection = selection.Iata;
  }

  isSelected(potential: Airport): boolean {
    return (this.existingSelection == potential.Iata);
  }

  isValid(potential: Airport): boolean {
    if (!this.counterpart) {
      return true;
    }
    return (potential.Connections || []).indexOf(this.counterpart) > -1;
  }

}
