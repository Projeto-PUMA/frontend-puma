export interface Degree {
  value: Number;
  viewValue: string;
}

export class User {
  name: string;
  email: string;
  cpf: string;
  degree: string;
  profession: string;
  phone1: string;
  phone2: string;
  password: string;
  passwordConfirm: string;
}

export const DegreeOptions: Degree[] = [
  {value: 0, viewValue: 'Ensino Fundamental Completo'},
  {value: 1, viewValue: 'Ensino Fundamental Incompleto'},
  {value: 2, viewValue: 'Ensino Médio Completo'},
  {value: 3, viewValue: 'Ensino Médio Incompleto'},
  {value: 4, viewValue: 'Ensino Superior Completo'},
  {value: 5, viewValue: 'Ensino Superior Incompleto'},
  {value: 6, viewValue: 'Mestrando(a)'},
  {value: 7, viewValue: 'Mestre(a)'},
  {value: 8, viewValue: 'Doutorando(a)'},
  {value: 9, viewValue: 'Doutor(a)'}
];
