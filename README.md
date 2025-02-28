# Documentação de Desenvolvimento - NutriTrack

## Visão Geral

O NutriTrack é uma aplicação voltada para o acompanhamento nutricional, permitindo aos usuários monitorar suas refeições,
definir metas e acompanhar seu progresso através de dashboards e relatórios.

## Link da aplicação em produção

**Link:** https://euosouza.github.io/nutritrack-web-frontent/

## Estrutura da Aplicação

A aplicação está dividida nos seguintes módulos principais:

### 1. Autenticação

  - Login: Autenticação via e-mail/senha, Google e redes sociais.
  - Cadastro: Registro de novos usuários com informações pessoais e preferências nutricionais.
  - Recuperação de senha: Envio de link para redefinição de senha via e-mail.

### 2. Onboarding

Esta etapa inicial ajuda o usuário a configurar seu perfil.

  - Coleta de dados: Perguntas sobre idade, peso, altura e objetivos.
  - Sugestão de metas: Cálculo automático de objetivos de calorias e macros.
  - Tour pela aplicação: Demonstração interativa das funcionalidades.

### 3. Configurações

#### Conta:

  - Tema (modo claro/escuro).
  - Idioma (português, inglês, espanhol).
  - Unidade de medidas (métrico/imperial).
  - Gerenciar assinatura (upgrade para versão premium).
  - Notificações (personalização de alertas diários).

#### Privacidade:

  - Política e privacidade.
  - Termos de uso.
  - Autorização de compartilhamento de dados.

### 4. Dashboard

Visão geral do progresso do usuário, incluindo metas e indicadores.

  - Resumo do dia: Calorias consumidas, gasto calórico e progresso das metas.
  - Gráficos: Evolução do peso e distribuição de macronutrientes.
  - Dicas personalizadas: Sugestões de melhoria com base no histórico.

### 5. Perfil

  - Informações básicas: Nome, idade, sexo, peso, altura.
  - Metas: Definição de objetivos de ganho ou perda de peso.
  - Medidas corporais: Registro de medidas para acompanhar progresso.

### 6. Alimentação

#### Diário alimentar:

  - Registro de refeições e calorias consumidas.

#### Refeições:

  - Cadastro e sugestão de pratos favoritos.
  - Importação de informações de alimentos via código de barras.
  - Recomendados com base nas preferências do usuário.
  - Configurações: Ajuste de macronutrientes e plano alimentar.

### 7. Relatórios

Gráficos e estatísticas sobre progresso alimentar e corporal.

  - Histórico alimentar: Comparativo entre consumo e metas.
  - Evolução do peso: Tendência de ganho/perda de peso ao longo do tempo.
  - Análise de nutrientes: Deficiências e excessos na dieta.

### 8. Institucional

  - Home Page: Apresentação da plataforma e funcionalidades.
  - Blog: Artigos sobre nutrição e saúde.

###  9. Landing Pages

#### Calculadora Nutricional:

  - IMC (Indice de Massa Corporal): Cálculo e classificação.
  - GCD (Gasto Calórico Diário): Estimativa baseada no nível de atividade.
  - TMB (Taxa Metabólica Basal): Cálculo de consumo calórico basal.
