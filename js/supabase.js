const SUPABASE_URL = 'https://roooptrfbwenuusflkvt.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJvb29wdHJmYndlbnV1c2Zsa3Z0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODExMjczMDYsImV4cCI6MjA5NjcwMzMwNn0.0fC0Ao9dG3zYa7_vEf46mng6q5KyBQtJDgvCrohURNA';

const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

window.supabaseClient = supabaseClient;

console.log('Supabase conectado:', window.supabaseClient);
