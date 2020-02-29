import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Dr Nice', avatar: '?accessoriesType=Prescription02&avatarStyle=Circle&clotheColor=PastelYellow&clotheType=Hoodie&eyeType=Dizzy&eyebrowType=DefaultNatural&facialHairColor=Red&facialHairType=BeardMedium&graphicType=Bat&hairColor=Red&hatColor=Blue03&mouthType=Concerned&skinColor=DarkBrown&topType=Eyepatch' },
      { id: 12, name: 'Narco', avatar: '?accessoriesType=Prescription02&avatarStyle=Circle&clotheColor=PastelYellow&clotheType=Hoodie&eyeType=Dizzy&eyebrowType=DefaultNatural&facialHairColor=Red&facialHairType=BeardMedium&graphicType=Bat&hairColor=Red&hatColor=Blue03&mouthType=Concerned&skinColor=DarkBrown&topType=LongHairBigHair' },
      { id: 13, name: 'Bombasto', avatar: '?accessoriesType=Prescription02&avatarStyle=Circle&clotheColor=PastelYellow&clotheType=Hoodie&eyeType=Dizzy&eyebrowType=DefaultNatural&facialHairColor=Red&facialHairType=BeardMedium&graphicType=Bat&hairColor=Red&hatColor=Blue03&mouthType=Concerned&skinColor=DarkBrown&topType=Eyepatch' },
      { id: 14, name: 'Celeritas', avatar: '?accessoriesType=Prescription02&avatarStyle=Circle&clotheColor=PastelYellow&clotheType=Hoodie&eyeType=Dizzy&eyebrowType=DefaultNatural&facialHairColor=Red&facialHairType=BeardMedium&graphicType=Bat&hairColor=Red&hatColor=Blue03&mouthType=Concerned&skinColor=DarkBrown&topType=Eyepatch' },
      { id: 15, name: 'Magneta', avatar: '?accessoriesType=Prescription02&avatarStyle=Circle&clotheColor=PastelYellow&clotheType=Hoodie&eyeType=Dizzy&eyebrowType=DefaultNatural&facialHairColor=Red&facialHairType=BeardMedium&graphicType=Bat&hairColor=Red&hatColor=Blue03&mouthType=Concerned&skinColor=DarkBrown&topType=LongHairBigHair' },
      { id: 16, name: 'RubberMan', avatar: '?accessoriesType=Prescription02&avatarStyle=Circle&clotheColor=PastelYellow&clotheType=Hoodie&eyeType=Dizzy&eyebrowType=DefaultNatural&facialHairColor=Red&facialHairType=BeardMedium&graphicType=Bat&hairColor=Red&hatColor=Blue03&mouthType=Concerned&skinColor=DarkBrown&topType=Eyepatch' },
      { id: 17, name: 'Dynama', avatar: '?accessoriesType=Prescription02&avatarStyle=Circle&clotheColor=PastelYellow&clotheType=Hoodie&eyeType=Dizzy&eyebrowType=DefaultNatural&facialHairColor=Red&facialHairType=BeardMedium&graphicType=Bat&hairColor=Red&hatColor=Blue03&mouthType=Concerned&skinColor=DarkBrown&topType=LongHairBigHair' },
      { id: 18, name: 'Dr IQ', avatar: '?accessoriesType=Prescription02&avatarStyle=Circle&clotheColor=PastelYellow&clotheType=Hoodie&eyeType=Dizzy&eyebrowType=DefaultNatural&facialHairColor=Red&facialHairType=BeardMedium&graphicType=Bat&hairColor=Red&hatColor=Blue03&mouthType=Concerned&skinColor=DarkBrown&topType=Eyepatch' },
      { id: 19, name: 'Magma', avatar: '?accessoriesType=Prescription02&avatarStyle=Circle&clotheColor=PastelYellow&clotheType=Hoodie&eyeType=Dizzy&eyebrowType=DefaultNatural&facialHairColor=Red&facialHairType=BeardMedium&graphicType=Bat&hairColor=Red&hatColor=Blue03&mouthType=Concerned&skinColor=DarkBrown&topType=LongHairBigHair' },
      { id: 20, name: 'Tornado', avatar: '?accessoriesType=Prescription02&avatarStyle=Circle&clotheColor=PastelYellow&clotheType=Hoodie&eyeType=Dizzy&eyebrowType=DefaultNatural&facialHairColor=Red&facialHairType=BeardMedium&graphicType=Bat&hairColor=Red&hatColor=Blue03&mouthType=Concerned&skinColor=DarkBrown&topType=Eyepatch' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
