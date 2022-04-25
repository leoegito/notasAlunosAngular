import { Injectable } from "@angular/core";
import { Aluno } from "./Aluno";

@Injectable({
    providedIn: 'root'
})

export class AlunoService {

    constructor() {

    }

    private listAlunos: Aluno[] = [
        new Aluno("Leonardo", 10.0, 10.0),
        new Aluno("Maryna", 9.5, 8.5),
        new Aluno("Pedro", 10.0, 9.0),
        new Aluno("Joca", 10.0, 5.0),
        new Aluno("Heger", 9.0, 9.2),
        new Aluno("Euler", 10.0, 10.0),
        new Aluno("Vladimir", 5.0, 4.0),
        new Aluno("Datena", 3.0, 2.7)
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