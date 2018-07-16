export interface Escolaridade {
  value: string;
  viewValue: string;
}

export class User {
  name: string;
  email: string;
  escolaridades : Escolaridade[] = [
    {value: 'EnsinoFundamentalCompleto-0', viewValue: 'Ensino Fundamental Completo'},
    {value: 'EnsinoFundamentalIncompleto-1', viewValue: 'Ensino Fundamental Incompleto'},
    {value: 'EnsinoMédioCompleto-2', viewValue: 'Ensino Médio Completo'},
    {value: 'EnsinoMédioIncompleto-3', viewValue: 'Ensino Médio Incompleto'},
    {value: 'EnsinoSuperiorCompleto-4', viewValue: 'Ensino Superior Completo'},
    {value: 'EnsinoSuperiorIncompleto-5', viewValue: 'Ensino Superior Incompleto'}
  ];
  profissao: string;
  telefone1: string;
  telefone2: string;
  telefone3: string;
}
