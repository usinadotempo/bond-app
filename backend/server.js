/**
 * Backend de conexão com Supabase para o Bond App
 * Foco: Autenticação e Gestão de Acordos (Mesa de Acordos)
 */

import { createClient } from '@supabase/supabase-js';

// Inicializa o cliente com credenciais seguras do ambiente
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

/**
 * Cria um novo acordo entre pai e filho
 * @param {Object} agreementData - Dados do acordo (title, description, child_id)
 */
async function createAgreement(agreementData) {
  const { data, error } = await supabase
    .from('bond_app.agreements') // Usando o schema isolado bond_app
    .insert([
      {
        parent_id: agreementData.parent_id,
        child_id: agreementData.child_id,
        title: agreementData.title,
        description: agreementData.description
      }
    ]);

  if (error) throw error;
  return data;
}

console.log("Backend Bond App: Módulo de acordos pronto para integração.");
