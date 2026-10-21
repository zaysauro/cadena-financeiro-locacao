# Cadena — Financeiro de Locação

MVP demonstrativo independente para a plataforma Super Cadena.

## Stack

Next.js 15, React 19, TypeScript, Supabase Auth (`@supabase/ssr`) e Vercel.

## Executar

```bash
npm install
cp .env.example .env.local
npm run dev
```

Configure em `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=https://SEU-PROJETO.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=SUA_CHAVE_PUBLICA
```

Use exclusivamente a chave pública (anon/publishable). **Nunca** inclua uma chave `service_role` ou segredos privados em variáveis `NEXT_PUBLIC_`.

## Rotas

- `/login`: autenticação Supabase (sem cadastro público)
- `/dashboard`: área autenticada com dashboard e movimentações **inteiramente fictícias**
- `/`: redirecionamento para dashboard

## Segurança e limitações

- O dashboard exige sessão Supabase validada no servidor por `auth.getUser()`.
- Ainda falta controle de autorização por função/departamento (RBAC), políticas RLS para futuras tabelas financeiras e testes de integração.
- Nenhuma cobrança, pagamento, repasse, conciliação ou atualização de dados reais está implementada.
- Os indicadores usam arrays fictícios em memória. **Não representam operações da Cadena.**
- Antes de integrar dados reais: isolamento entre organizações, logs de auditoria, revisão das regras contábeis e autorização.

## Publicação

Projeto Vercel criado na conta **Cadena**: `cadena-financeiro-locacao`. A associação automática ao GitHub depende de habilitar uma Git Login Connection para `zaysauro` na Vercel corporativa. Depois, configurar as variáveis de ambiente e publicar. **Ainda não há deploy publicado.**
