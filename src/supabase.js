import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://nvkkuxliwhupdmetwsmf.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im52a2t1eGxpd2h1cGRtZXR3c21mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU5NDkwNzEsImV4cCI6MjA4MTUyNTA3MX0.144yvFSsKorNE43XTRixHBfR_ju9-2PvwCs_zaq7DVA";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
