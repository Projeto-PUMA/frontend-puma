import { User } from './user.model';

export class Project {
    title: string;
    summary: string;
    body: string;
    author: Author;
    projectAuthorCategory: ProjectAuthorCategory; //submissionType: string;
    cnpj: string;
    projectStatus: number = 3;
    answer: Answer;
    projectArea: string; //pspNumber: string;
    projectSubArea: string;//applicationArea: string;
    // fantasyName: string;
    // socialReason: string;
    //submiter: User;
    //pdf: Document;
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

export const psp1SubOptions: Psp[] = [
    {description: 'Análise de Banco de Dados', number: 0},
    {description: 'Criação de questionário de Pesquisa',number: 1},
    {description: 'Outras', number: 2}
];

export const psp2SubOptions: Psp[] = [
    {description: 'Projeto de Sistema da Informação', number: 0},
    {description: 'Outras', number: 1}
];

export const psp3SubOptions: Psp[] = [
    {description: 'Outras', number: 0}
];

export const psp4SubOptions: Psp[] = [
    {description: 'Previsão de Demanda', number: 0},
    {description: 'Gestão de Estoques', number: 1},
    {description: 'Criação de ferramentas de apoio ao planejamento e controle da produção', number:2},
    {description: 'Outras', number: 3}
];

export const psp5SubOptions: Psp[] = [
    {description: 'Mapeamento de Processos', number: 0},
    {description: 'Cadeia de Valor', number: 1},
    {description: 'Melhoria Contínua de Processos', number: 2},
    {description: 'Outras', number: 3}
];

export const psp6SubOptions: Psp[] = [
    {description: 'Elaboração de Projeto Conceitual de Produto', number: 0},
    {description: 'Outras', number: 1}
];

export const psp7SubOptions: Psp[] = [
    {description: 'Definição de Objetivos Estratégicos', number: 0},
    {description: 'Viabilidade Econômica', number: 1},
    {description: 'Desdobramento de Metas', number: 2},
    {description: 'Outras', number: 3}
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

export class Author{
    id: number;
}

export class ProjectAuthorCategory{
    id: number;
}

// export class ProjectStatus{
//     id: number = 3; //rs rs rs
// }

export class Answer{
    answer: string = "Projeto em Análise";
}
