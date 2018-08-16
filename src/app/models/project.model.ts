import { User } from './user.model';

export class Project {
    title: string;
    resume: string;
    problem: string;
    pspNumber: string;
    applicationArea: string;
    submissionType: string;
    customerInfo: Customer;
    submiter: User;
}

export interface Customer {
    fantasyName: string;
    socialReason: string;
    cnpj: string;
}
export interface Psp {
    description: string;
    number: number;
}

export const pspOptions: Psp[] = [
    {description: 'PSP1 - Probabilidade e Estatística', number: 0 },
    {description: 'PSP2 - Sistemas de Informação', number: 1},
    {description: 'PSP3 - Livre ', number: 2},
    {description: 'PSP4 - Planejamento e Controle da Produção', number: 3},
    {description: 'PSP5 - Gestão da Qualidade', number: 4},
    {description: 'PSP6 - Engenharia do Produto', number: 5},
    {description: 'PSP7 - Gestão Estratégica', number: 6},
    {description: 'Não sei em qual categoria meu projeto se encaixa', number:7},
];

export const psp1SubOptions: Array<string> = [
    'Análise de Banco de Dados',
    'Criação de questionário de Pesquisa',
    'Outras',
];

export const psp2SubOptions: Array<string> = [
    'Projeto de Sistema da Informação',
    'Outras',
];

export const psp3SubOptions: Array<string> = [
    'Outras',
];

export const psp4SubOptions: Array<string> = [
    'Previsão de Demanda',
    'Gestão de Estoques',
    'Criação de ferramentas de apoio ao planejamento e controle da produção',
    'Outras',
];

export const psp5SubOptions: Array<string> = [
    'Mapeamento de Processos',
    'Cadeia de Valor',
    'Melhoria Contínua de Processos',
    'Outras',
];

export const psp6SubOptions: Array<string> = [
    'Elaboração de Projeto Conceitual de Produto',
    'Outras',
];

export const psp7SubOptions: Array<string> = [
    'Definição de Objetivos Estratégicos',
    'Viabilidade Econômica',
    'Desdobramento de Metas',
    'Outras',
];

export const pspSubOptions: Array<Object> = [
    psp1SubOptions,
    psp2SubOptions,
    psp3SubOptions,
    psp4SubOptions,
    psp5SubOptions,
    psp6SubOptions,
    psp7SubOptions,
];
