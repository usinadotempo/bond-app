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
 * Integração simples para alimentar o dashboard
 */
async function loadDashboardData() {
  try {
    const parentId = localStorage.getItem('user_id'); // Exemplo de captura de sessão
    const agreements = await fetchActiveAgreements(parentId);
    
    // Atualiza o DOM (exemplo básico)
    console.log("Acordos carregados:", agreements);
    return agreements;
  } catch (err) {
    console.error("Erro ao carregar dados:", err);
  }
}

export { loadDashboardData };
