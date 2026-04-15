import { createClient } from '@supabase/supabase-js';

// Inicializa o cliente com credenciais seguras do ambiente
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

/**
 * Busca acordos ativos para o dashboard
 * @param {string} parentId - ID do pai logado
 */
async function fetchActiveAgreements(parentId) {
  const { data, error } = await supabase
    .from('agreements')
    .select('*')
    .eq('parent_id', parentId)
    .eq('is_active', true);

  if (error) throw error;
  return data;
}

/**
 * Cria um novo acordo
 * @param {string} title 
 * @param {string} description 
 * @param {string} parentId 
 */
async function createAgreement(title, description, parentId) {
  const { data, error } = await supabase
    .from('agreements') // Acessando via schema configurado no postgrest ou schema público
    .insert([{ 
        title, 
        description, 
        parent_id: parentId,
        is_active: true
    }]);

  if (error) throw error;
  return data;
}

export { loadDashboardData, createAgreement };
