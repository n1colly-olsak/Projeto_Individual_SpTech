create database projetoIndividual;
use projetoIndividual;

create table usuario (
idUsuario int primary key auto_increment,
nome varchar(45),
email varchar(45),
senha varchar(45));

select * from usuario;

create table quiz (
idQuiz int primary key,
descricao varchar(50),
qtdPerguntas int );

select * from quiz;
insert into quiz values 
	(1, 'Um quiz ginástico', 8);

create table tentativa (
idTentativa int,
fkUsuario int,
fkQuiz int,
qtdAcertos int,
constraint pkCompostaTentativa 
	primary key(idTentativa, fkUsuario, fkQuiz),
constraint fkUsuario 
	foreign key (fkUsuario) 
		references usuario(idUsuario),
constraint fkQuiz
	foreign key (fkQuiz) 
		references quiz(idQuiz));
        
select * from tentativa;
