# Roteiro de Implementação: Autenticação e Lógica do Bond App

## Etapa 1: Autenticação (Auth Supabase)
- Implementar o fluxo de `sign_up` e `sign_in` via Supabase Auth.
- Criar o contexto de sessão (`localStorage.setItem('user_id', ...)`) para o dashboard.

## Etapa 2: Conexão Total da Mesa de Acordos
- Finalizar a integração entre o front-end e o backend para salvar acordos reais no Supabase, vinculando-os ao `user_id` autenticado.

## Etapa 3: Sistema de Recompensas
- Implementar a lógica de conversão: `(tempo_offline_segundos / 3600) * taxa_conversao = moedas_ganhas`.

## Etapa 4: Integração de Monitoramento (Consensual)
- Configurar o "Contrato de Confiança": o app coleta métricas apenas após a aceitação do termo dentro do app.

---

### Execução Inicial: Preparando a Autenticação
Vou iniciar o código da Autenticação. Como estamos em um ambiente seguro, os segredos (`SUPABASE_URL`, `SUPABASE_ANON_KEY`) serão consumidos via `op-local` no back-end.

Iniciando Etapa 1...
