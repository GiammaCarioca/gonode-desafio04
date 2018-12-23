# [Bootcamp GoNode](https://rocketseat.com.br/bootcamp)

## Desafio 4: Sistema de agendamento de compromissos

Criar uma API REST com AdonisJS para um sistema de
agendamentos de compromissos (calendário).

### Requisitos funcionais

1. O usuário deve poder criar uma conta com nome, e-mail e senha;
2. O usuário deve poder se autenticar na aplicação com e-mail e senha;
3. O usuário deve poder alterar seu nome e senha informando a senha antiga, a senha nova e a confirmação da senha nova;
4. O usuário deve poder cadastrar eventos em seu calendário com título, localização, data e horário;
5. O usuário deve poder listar os eventos cadastrados por data;
6. O usuário deve poder excluir um compromisso;
7. O usuário deve poder compartilhar um compromisso informando o e-mail do destinatário. Assim que compartilhado, o destinatário deve receber todas informações do evento por e-mail.

### Requisitos não funcionais

1. Utilize banco de dados SQL;
2. Utilize fila com Redis para programar o envio de e-mails do compartilhamento de compromisso.

### Regras de negócio

1. O e-mail do usuário é único;
2. O usuário não pode alterar seu e-mail;
3. Não deve ser possível cadastrar dois eventos no mesmo horário no calendário de um usuário;
4. O usuário só pode ver/editar/deletar seus eventos;
5. O usuário não pode editar/deletar um evento que já passou;
6. Todos cadastros devem possuir validação de campos com mensagens legíveis.
