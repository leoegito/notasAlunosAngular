import { Injectable } from "@angular/core";
import { Aluno } from "./Aluno";

@Injectable({
    providedIn: 'root'
})

export class AlunoService {

    constructor() {

    }

    private listAlunos: Aluno[] = [
        new Aluno("Isaac", 10.0, 10.0),
        new Aluno("Ada", 9.5, 9.1),
        new Aluno("Euclides", 10.0, 9.0),
        new Aluno("Arquimedes", 10.0, 5.5),
        new Aluno("Alan", 9.0, 9.2),
        new Aluno("Euler", 10.0, 9.8),
        new Aluno("Fulano", 5.0, 4.0),
        new Aluno("Beltrano", 3.0, 2.7)
    ];


    public cadastrar(aluno: Aluno) {
        this.listAlunos.push(aluno);
    }

    public listar() {
        return this.listAlunos;
    }

    public atualizar(id: number, aluno: Aluno) {
        this.listAlunos[id] = aluno;
    }

    public deletar(id: number) {
        this.listAlunos.splice(id, 1);
    }


}