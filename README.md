# Cifra de César

## Índice

- [1. Sobre](#1-Sobre)
- [2. Resumo do projeto e relação com o usuário](#2-resumo-do-projeto)
- [3. Interface do Usuário](#3-interface-do-usuário)
- [4. Funcionalidades](#4-considerações-gerais)
- [5. Instalação](#5-critérios-de-aceitação-mínimos-do-projeto)


---

## 1. Sobre

 A cifra de César é um dos primeiros tipos de criptografias conhecidas na história.É um tipo de cifra por substituição, em que cada letra do texto original é substituida por outra que se encontra há um número fixo de posições (deslocamento) mais a frente do mesmo alfabeto.

Por exemplo se usarmos o deslocamento (_offset_) de 3 posições:

- Alfabeto sem cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
- Alfabeto com cifra: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C
- A letra A será D
- A palavra CASA será FDVD

## 2. Resumo do projeto e relação com o usuário

O projeto parte enquanto uma aplicação web na qual o usuário poderá escrever mensagens e cifrar/decifrar tais mensagens utilizando funcionalidades em uma interface interativa. Não existe um tema específico: o público-alvo desta aplicação seria qualquer usuário que tenha interesse e/ou busque por temas afins como 'criptografia', 'cifras', 'codificação de mensagens' etc.

Ao se deparar com a aplicação, o usuário encontraria um pequeno texto informativo sobre o funcionamento da cifra e uma interface que o permitirar testar o funcionamento da mesma. Nessa interface, o usuário encontraria:
<br>
 - Interface que permita escolher o offset (chave de deslocamento) usava para cifrar/decifrar.
 - Interface que permita escrever um texto para ser cifrado.
 - Interface que mostre o resultado da cifra corretamente.
 - Interface que permita escrever um texto para ser decifrado.
 - Interface que mostre o resultado decifrado corretamente.

Através dessa aplicação, o usuário poderia utiliza-la para codificar mensagens para os mais diversos fins e compartilha-las casualmente em qualquer plataforma de troca de mensagens, bastando apenas que o usuário compartilhe o aplicativo web juntamente com a mensagem cifrada  e o número de deslocamento.


## 3. Interface do Usuário

A princípio, a aplicação possuiria duas interfaces: a primeira seria uma tela de boas vindas com um texto informativo e imagens contextualizando sobre o que se trata a Cifra de César. No final da página, o usuário encontraria um menu de navegação, que o convidava a testar a cifra. Haveria um botão que o levaria a outra página na qual estaria um formulário onde ele poderia submeter uma mensagem e cifra-la/ decifra-la.
<br>
<img src="Homepage.png" alt="prototipo da Homepage">
<img src="pagina_dos_inputs.png"alt="prototipo da interface para codificar">
<br>
Todavia, a medida que o projeto foi sendo desenvolvido, o número de páginas foi reduzido para apenas uma única página, mas mantendo a estrutura de conteudo de ambas as páginas: um texto com imagem explicando sobre o que era a cifra e logo abaixo, um formulário com botões que permitiam o usuário escrever e criptografar uma mensagem.

## 4. Funcionalidades

- Este projeto deve ser resolvido individualmente.
- O projeto será entregue subindo o seu código no GitHub (commit/push) e o
  deploy será feito no GitHub Pages. Se não sabe o que é o GitHub, não se
  preocupe, você aprendera durante o projeto.
- Tempo para completar: tempo referência 2 semanas.

## 5. Instalação

Use o alfabeto simples (somente maiúsculas e sem ç):

- A B C D E F G H I J K L M N O P Q R S T U V W X Y Z

### Scripts / Arquivos


