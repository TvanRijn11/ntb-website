import { Injectable } from '@angular/core';
import { Lichting } from './models/lichting.model';

@Injectable({
  providedIn: 'root'
})
export class LichtingenDetailService {
  private lichtingen: Lichting[] = [
    { id: 0, name: 'Lichting 0: Nader te bepalen', photo: 'lichting0.jpg', members: ['Joep Haarselhorst van den Goorbergh', 'Willem Limpers', 'Jurgen I. Schenk', 'Tom J.H. Wolfkamp'] },
    { id: 1, name: 'Lichting 1: Nachtelijke teddy beren', photo: 'lichting1.jpg', members: ['Chris S. de Jon', 'Jeroen G. Assink', 'Sven Koning ter Heege'] },
    { id: 2, name: 'Lichting 2: normaliter triomferende beerpongers', photo: 'lichting2.jpg', members: ['Bram N. Zentveld', 'Guido A.M. van der Heijden', 'Ronald G.J. Keim', 'Roy Koers', 'Vincent Janssen'] },
    { id: 3, name: 'Lichting 3: nonstop tjappende borrelaars', photo: 'lichting3.jpg', members: ['Jurre Numan', 'Tycho de Haan'] },
    { id: 4, name: 'Lichting 4: nonchalante tjoepende boffers', photo: 'lichting4.jpg', members: ['Jeff Takken', 'Kick E. Zijlstra', 'Lars Steenbeek', 'Lex A.H. de Jager', 'Quint de Boer', 'Ruben L. Grob', 'Twan Leeflang'] },
    { id: 5, name: 'Lichting 5: Nogal Teleurstellende Bende', photo: 'lichting5.jpg', members: [ 'Bart Mulders', 'Bart Ligtenberg', 'Ivo Naastepad', 'Julian israël', 'Tom van Rijn'] },
  ];

  constructor() {}

  getAllLichtingDetails() {
    return this.lichtingen
  }

  getLichtingDetailsById(id: number): Lichting | undefined {
    return this.lichtingen.find(lichting => lichting.id === id);
  }
}
