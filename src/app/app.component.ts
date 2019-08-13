import {Component} from '@angular/core';
import {MatDialog, MatSnackBar} from '@angular/material';
import {MaterialCssVarsService} from '../../projects/material-css-vars/src/lib/material-css-vars.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isDarkTheme = false;
  lastDialogResult: string;
  mode: string;
  value: number;

  foods: any[] = [
    {name: 'Pizza', rating: 'Excellent'},
    {name: 'Burritos', rating: 'Great'},
    {name: 'French fries', rating: 'Pretty good'},
  ];

  selectedValue: string;

  games = [
    {value: 'rts-0', viewValue: 'Starcraft'},
    {value: 'rpg-1', viewValue: 'Baldur\'s Gate'},
    {value: 'fps-2', viewValue: 'Doom'}
  ];

  progress = 0;
  slider = {
    autoTicks: false,
    disabled: false,
    invert: false,
    max: 100,
    min: 0,
    showTicks: false,
    step: 1,
    thumbLabel: false,
    value: 0,
    vertical: false,
    tickInterval: 1,
    checked: true
  };
  tiles = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  color: string;

  availableColors = [
    {name: 'none', color: ''},
    {name: 'Primary', color: 'primary'},
    {name: 'Accent', color: 'accent'},
    {name: 'Warn', color: 'warn'}
  ];

  primary = '#3f51b5';
  accent = '#ff4081';

  constructor(
    private _dialog: MatDialog,
    private _snackbar: MatSnackBar,
    private _materialCssVarsService: MaterialCssVarsService,
  ) {


    // Update the value for the progress-bar on an interval.
    setInterval(() => {
      this.progress = (this.progress + Math.floor(Math.random() * 4) + 1) % 100;
    }, 200);
  }

  get tickInterval(): number | 'auto' {
    return this.slider.showTicks ? (this.slider.autoTicks ? 'auto' : this.slider.tickInterval) : null;
  }

  set tickInterval(v) {
    this.slider.tickInterval = Number(v);
  }

  openDialog() {
    // const dialogRef = this._dialog.open(DialogContentComponent);
    //
    // dialogRef.afterClosed().subscribe(result => {
    //   this.lastDialogResult = result;
    // });
  }

  showSnackbar() {
    this._snackbar.open('YUM SNACKS', 'CHEW');
  }

  onPrimaryChange(hex: string) {
    this.primary = hex;
    this._materialCssVarsService.changePrimary(hex);
  }

  onAccentChange(hex: string) {
    this.accent = hex;
    this._materialCssVarsService.changeAccent(hex);
  }

}