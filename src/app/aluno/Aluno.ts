export class Aluno {

    public nomeAluno?: string;
    private _notaP1?: number;
    private _notaP2?: number;
    private _media?: number;
    private _condicao?: string;


    constructor(nome?: string, notaP1?: number, notaP2?: number) {
        this.nomeAluno = nome;
        this.notaP1 = notaP1;
        this.notaP2 = notaP2;
        if (notaP1 && notaP2) {
            this.processarNotas(this.notaP1, this.notaP2);
        }
    }

    processarNotas(nota1: number = 0, nota2: number = 0) {
        this._media = (nota1 + nota2) / 2;
        if (this._media >= 6) {
            this._condicao = "Aprovado";
        } else {
            this._condicao = "Reprovado";
        }
    }

    get media() {
        return this._media;
    }

    get notaP1() {
        return this._notaP1;
    }

    get notaP2() {
        return this._notaP2;
    }

    get condicao() {
        return this._condicao;
    }

    set notaP1(nota: number) {
        this._notaP1 = nota;
        this.processarNotas(this._notaP1, this._notaP2);
    }

    set notaP2(nota: number) {
        this._notaP2 = nota;
        this.processarNotas(this._notaP1, this._notaP2);
    }

}