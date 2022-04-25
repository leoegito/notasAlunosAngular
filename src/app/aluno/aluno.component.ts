import { Component, OnInit } from '@angular/core';
import { Aluno } from './Aluno';
import { AlunoService } from './aluno.service';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {

  public listAlunos: Aluno[];
  public aluno: Aluno;
  public id: number;

  constructor(private service: AlunoService) { }

  ngOnInit(): void {
    this.id = -1;
    this.aluno = new Aluno();
    this.listAlunos = this.service.listar();
  }

  checaPreenchimento(aluno: Aluno) {
    const regex = /^[a-zA-Z]*$/;
    if (!aluno.nomeAluno || !regex.test(aluno.nomeAluno)) {
      alert("Preencha o nome corretamente.");
      return false;
    } else if (!aluno.notaP1 || aluno.notaP1 > 10 || aluno.notaP1 < 0
      || !aluno.notaP2 || aluno.notaP2 > 10 || aluno.notaP2 < 0) {
      alert("Preencha as notas com um número entre 0 e 10");
      return false;
    }
    return true;
  }

  cadastrar() {
    if (this.checaPreenchimento(this.aluno)) {
      this.service.cadastrar(this.aluno);
      this.aluno = new Aluno();
    }
  }

  editar(id: number) {
    this.id = id;
    this.aluno = new Aluno(
      this.listAlunos[id].nomeAluno,
      this.listAlunos[id].notaP1,
      this.listAlunos[id].notaP2
    );
  }

  atualizar() {
    if (this.checaPreenchimento(this.aluno)) {
      this.service.atualizar(this.id, this.aluno);
      this.aluno = new Aluno();
      this.id = -1;
    }
  }

  deletar(id: number) {
    this.service.deletar(id);
    this.id = -1;
  }

}
