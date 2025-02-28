# Documentação de Desenvolvimento - NutriTrack

## Índice

- [Documentação de Desenvolvimento - NutriTrack](#documentação-de-desenvolvimento---nutritrack)
  - [Índice](#índice)
  - [Visão Geral](#visão-geral)
  - [Link da Aplicação em Produção](#link-da-aplicação-em-produção)
  - [Estrutura da Aplicação](#estrutura-da-aplicação)
    - [1. Autenticação](#1-autenticação)
      - [1.1 Login:](#11-login)
      - [1.2 Cadastro:](#12-cadastro)
      - [1.3 Recuperação de Senha:](#13-recuperação-de-senha)
    - [2. Onboarding](#2-onboarding)
      - [2.1 Coleta de Dados:](#21-coleta-de-dados)
      - [2.2 Sugestão de Metas:](#22-sugestão-de-metas)
      - [2.3 Tour pela Aplicação:](#23-tour-pela-aplicação)
    - [3. Configurações](#3-configurações)
      - [Conta:](#conta)
      - [Privacidade:](#privacidade)
    - [4. Dashboard](#4-dashboard)
    - [5. Perfil](#5-perfil)
    - [6. Alimentação](#6-alimentação)
      - [Diário Alimentar:](#diário-alimentar)
      - [Refeições:](#refeições)
    - [7. Relatórios](#7-relatórios)
    - [8. Institucional](#8-institucional)
    - [9. Landing Pages](#9-landing-pages)
      - [Calculadora Nutricional:](#calculadora-nutricional)
    - [10. Gamificação e Engajamento](#10-gamificação-e-engajamento)
      - [Sistema de Pontuação:](#sistema-de-pontuação)
      - [Níveis e Desbloqueios:](#níveis-e-desbloqueios)
      - [Medalhas e Conquistas:](#medalhas-e-conquistas)
      - [Desafios e Missões:](#desafios-e-missões)
      - [Rankings e Competição Amigável:](#rankings-e-competição-amigável)
      - [Sistema de Recompensas:](#sistema-de-recompensas)
      - [Feedback Positivo e Notificações Motivacionais:](#feedback-positivo-e-notificações-motivacionais)
    - [11. Habit Tracker (Monitoramento de Hábitos)](#11-habit-tracker-monitoramento-de-hábitos)
      - [Cadastro de Hábitos:](#cadastro-de-hábitos)
      - [Visualização e Monitoramento:](#visualização-e-monitoramento)
      - [Relatórios de Hábitos:](#relatórios-de-hábitos)
      - [Integração com Gamificação:](#integração-com-gamificação)
    - [12. Integrações](#12-integrações)

---

## Visão Geral

O NutriTrack é uma plataforma de acompanhamento nutricional que permite aos usuários monitorar refeições, definir metas de consumo alimentar e acompanhar a evolução da sua saúde por meio de dashboards, relatórios e insights personalizados.

A aplicação segue uma arquitetura modular e componentizada, utilizando React/Angular no front-end e Node.js/Fastify no back-end, com banco de dados relacional (PostgreSQL/MySQL) e armazenamento em AWS S3 para imagens.

---

## Link da Aplicação em Produção

**Link:** [https://euosouza.github.io/nutritrack-web-frontent/](https://euosouza.github.io/nutritrack-web-frontent/)

---

## Estrutura da Aplicação

A aplicação está dividida nos seguintes módulos principais:

### 1. Autenticação

#### 1.1 Login:

**Fluxo:**
- O usuário insere e-mail e senha.
- A senha é hasheada (bcrypt) e validada contra o banco de dados.
- Se válida, um JWT (JSON Web Token) é gerado e armazenado em httpOnly cookies para segurança.
- Caso o usuário tenha optado por "Lembrar-me", um refresh token é gerado e armazenado no banco.
- O usuário pode autenticar-se também via Google, Facebook e Apple através de OAuth 2.0.

**Validações:**
- ✅ E-mail e senha obrigatórios.
- ✅ A senha deve conter ao menos 8 caracteres, com letras, números e símbolos.
- ✅ Caso o login falhe 3 vezes seguidas, um bloqueio temporário de 15 minutos é ativado.

#### 1.2 Cadastro:

**Fluxo:**
- O usuário insere nome, e-mail, senha e dados nutricionais (opcional).
- O sistema envia um e-mail de verificação com um link para ativação da conta.
- Após ativação, o usuário pode acessar a aplicação normalmente.

**Dados armazenados:**
- Nome completo
- E-mail (com index para busca rápida)
- Hash da senha
- Data de nascimento, peso, altura e sexo (opcional)
- Tipo de dieta preferida (ex: vegana, cetogênica)
- Data de criação da conta

#### 1.3 Recuperação de Senha:

**Fluxo:**
- O usuário insere seu e-mail na tela de recuperação.
- Um token de redefinição de senha (válido por 1 hora) é enviado via e-mail.
- Ao acessar o link, ele pode redefinir a senha, que será armazenada com novo hash bcrypt.
- Caso o token esteja expirado, um erro é exibido e um novo pode ser solicitado.

---

### 2. Onboarding

Esta etapa inicial ajuda o usuário a configurar seu perfil.

#### 2.1 Coleta de Dados:

- O usuário responde a perguntas sobre idade, peso, altura, sexo e nível de atividade física.
- As informações são armazenadas para cálculo da Taxa Metabólica Basal (TMB).

#### 2.2 Sugestão de Metas:

- Com base na TMB, o sistema sugere um plano calórico diário.
- As metas podem ser personalizadas pelo usuário.

#### 2.3 Tour pela Aplicação:

- Passo a passo interativo guiando pelas principais funcionalidades.
- Explicações de como registrar refeições, visualizar relatórios e configurar notificações.

---

### 3. Configurações

#### Conta:

- Tema: Alternância entre modo claro e escuro, armazenado em localStorage.
- Idioma: Opções de português, inglês e espanhol.
- Unidade de Medidas: Escolha entre quilogramas/metros ou libras/pés.
- Gerenciar Assinatura: Controle de planos pagos, integração com Stripe/Pix.
- Notificações: Personalização de lembretes para ingestão de água, refeições e atividades físicas.

#### Privacidade:

- Política de Privacidade e Termos de Uso disponíveis.
- Autorização de compartilhamento de dados para integração com Google Fit e Apple Health.
- Termos de uso.

---

### 4. Dashboard

Visão geral do progresso do usuário, incluindo metas e indicadores.

  - Resumo do dia: Calorias consumidas, gasto calórico e progresso das metas.
  - Gráficos: Evolução do peso e distribuição de macronutrientes.
  - Dicas personalizadas: Sugestões de melhoria com base no histórico.

---

### 5. Perfil

  - Informações básicas: Nome, idade, sexo, peso, altura.
  - Metas: Definição de objetivos de ganho ou perda de peso.
  - Medidas corporais: Registro de medidas para acompanhar progresso.

---

### 6. Alimentação

#### Diário Alimentar:

  - Registro de refeições e calorias consumidas.

#### Refeições:

  - Cadastro e sugestão de pratos favoritos.
  - Importação de informações de alimentos via código de barras.
  - Recomendados com base nas preferências do usuário.
  - Configurações: Ajuste de macronutrientes e plano alimentar.
  - Scan de Alimentos com IA: Estimativa calórica de pratos via foto.

---

### 7. Relatórios

Gráficos e estatísticas sobre progresso alimentar e corporal.

  - Histórico alimentar: Comparativo entre consumo e metas.
  - Evolução do peso: Tendência de ganho/perda de peso ao longo do tempo.
  - Análise de nutrientes: Deficiências e excessos na dieta.

---

### 8. Institucional

  - Home Page: Apresentação da plataforma e funcionalidades.
  - Blog: Artigos sobre nutrição e saúde.

---

### 9. Landing Pages

#### Calculadora Nutricional:

  - IMC (Indice de Massa Corporal): Cálculo e classificação.
  - GCD (Gasto Calórico Diário): Estimativa baseada no nível de atividade.
  - TMB (Taxa Metabólica Basal): Cálculo de consumo calórico basal.

---

### 10. Gamificação e Engajamento

Para aumentar o engajamento e incentivar a adesão dos usuários ao plano alimentar e de exercícios, o NutriTrack implementa mecânicas de gamificação:

#### Sistema de Pontuação:

- Usuários acumulam pontos ao registrar refeições, cumprir metas diárias e manter consistência no uso do app.
- Pontos podem ser trocados por benefícios dentro da plataforma (como temas exclusivos ou relatórios avançados).

#### Níveis e Desbloqueios:

- O usuário começa como "Iniciante" e sobe de nível conforme mantém bons hábitos.
- Novos níveis desbloqueiam conteúdos exclusivos, como dicas avançadas e desafios personalizados.

#### Medalhas e Conquistas:

- Conquistas por ações específicas, como "Primeira Semana Completa", "Meta de Calorias Atingida 10x" e "100 Dias de Consistência".
- Medalhas podem ser compartilhadas nas redes sociais para incentivar outros usuários.

#### Desafios e Missões:

- Desafios semanais, como "Comer 5 porções de vegetais por dia" ou "Beber 2 litros de água diariamente".
- Missões especiais para eventos sazonais (ex.: "Desafio de Verão: Perca 2kg em 1 mês").

#### Rankings e Competição Amigável:

- Comparação de progresso com amigos ou comunidade.
- Classificação mensal para destacar usuários mais consistentes.

#### Sistema de Recompensas:

- Bonificações diárias ao completar desafios ou manter streaks.
- Usuários podem trocar recompensas por funcionalidades premium temporárias.

#### Feedback Positivo e Notificações Motivacionais:

- Mensagens motivacionais ao atingir metas.
- Feedback positivo para reforçar bons hábitos.

---

### 11. Habit Tracker (Monitoramento de Hábitos)

O NutriTrack permite que os usuários criem, monitorem e analisem novos hábitos saudáveis que desejam cultivar, integrando essa funcionalidade ao sistema de gamificação.

#### Cadastro de Hábitos:

- O usuário pode definir hábitos personalizados, como "Beber 2L de água por dia", "Dormir 8 horas", "Fazer 30 minutos de exercício".
- Opção de definir lembretes e notificações para cada hábito.

#### Visualização e Monitoramento:

- Calendário com registro visual do progresso dos hábitos.
- Opção de marcar hábitos concluídos diariamente.
- Exibição de streaks (dias consecutivos mantendo o hábito).

#### Relatórios de Hábitos:

- Gráficos mostrando a consistência e evolução dos hábitos ao longo do tempo.
- Comparação entre hábitos registrados e progresso nutricional.

#### Integração com Gamificação:

- Usuários ganham pontos e desbloqueiam conquistas ao manter hábitos saudáveis.
- Medalhas especiais para quem mantém streaks longos.
- Possibilidade de desafios de hábitos (ex.: "30 dias sem refrigerante").

---

### 12. Integrações

**Funcionalidades**

- Conexão com Google Fit, Apple Health, Fitbit.
- Exportação de dados em PDF e Excel.
- Chat com nutricionistas.

**Regras de Negócio**

- Somente usuários premium podem exportar dados em formatos avançados.
- Nutricionistas podem sugerir ajustes no plano alimentar via chat.
