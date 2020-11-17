# Recuperação de Senha

**RF** (Requisitos Funcionais)

- O usuário deve poder recuperar sua senha informando o seu e-mail;
- O usuário deve receber um e-amil com instruções de recuperação de senha;
- O usuário deve poder resetar sua senha;

**RNF** (Requisitos não Funcionais)

- Utilizar Mailtrap para testar envios em ambiente de dev;
- Utilizar Amazon SES para envios em produção;
- O envio de e-mails deve acontecer em segundo plano (background job);

**RN** (Requisitos de Negócios)

- O link enviado por e-mail para resetar senha, deve expirar em 2 horas;
- O usuário precisa confirmar a nova senha ao resetar;


# Atualização do perfil

**RF**

- O usuário deve poder atualizar o seu perfil (nome, email e senha);

**RN**

- O usuário não pode alterar seu e-mail para um e-mail já utilizado;
- Para atualizar sua senha, o usuário deve informar a senha antiga;
- Para atualizar sua senha, o usuário deve repetir a nova senha;

# Painel do prestador

**RF**

- O usuário deve poder listar seus agendamentos de um dia específico;
- O prestador deve receber uma notificação sempre que houver um novo agendamento;
- O prestador deve poder visualizar as notificações não lidas;

**RNF**

- Os agendamentos do prestador no dia devem ser armazenadas em cache;
- As notificações do prestador devem ser armazenadas no MongoDB;
- Asnotificações do prestador devem ser enviadas em tempo-real utilizando Socket.io;

**RN**

- A notificação deve ter um status de lida ou não lida;

# Agendamento de Serviço

**RF**

- O usuário deve poder listar todos prestadores de serviço cadastrados;
- O usuário deve poder listar os dias de um mês com pelo menos um horário disponível por prestador;
- O usuário deve poder listar horários disponíveis em um dia específico de um prestador;
- O usuário deve poder realizar um novo agendamento com um prestador;

**RNF**

- A listagem de prestadores deve ser armazenada em cache;

**RN**

- Cada agendamento deve durar 1 hora;
- Os agendamentos devem estar disponíveis entra 8h - 18h (Primeiro ás 8h - Último ás 17h);
- O usuário não pode agendar em horário já ocupado;
- O usuário não pode agendar em horário que já passou;
- O usuário não pode agendar serviços consigo mesmo;
