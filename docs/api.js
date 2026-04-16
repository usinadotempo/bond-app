import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

const supabase = createClient('https://lvxymjdbekmuqeyqrrwi.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx2eHltamRiZWttdXFleXFycndpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU4NTI4ODUsImV4cCI6MjA5MTQyODg4NX0.9yNRM-DAdQx8h1tmit46M45WDubB3fPYLylufr9oRG8');

export async function loadDashboardData() {
    const parentId = localStorage.getItem('user_id');
    if (!parentId) return [];
    
    const { data, error } = await supabase
        .from('agreements')
        .select('*')
        .eq('parent_id', parentId)
        .eq('is_active', true);

    if (error) {
        console.error("Erro ao buscar:", error);
        return [];
    }
    return data;
}

export async function createAgreement(title, description, parentId) {
    const { data, error } = await supabase
        .from('agreements')
        .insert([{ title, description, parent_id: parentId, is_active: true }]);

    if (error) throw error;
    return data;
}
