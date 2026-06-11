const SUPABASE_URL = 'https://roooptrfbwenuusflkvt.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_2CXAjiBSfzPwZxjHeCDMjQ_Eo36MmZqi';

const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

window.supabaseClient = supabaseClient;
