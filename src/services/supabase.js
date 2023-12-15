import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://gtgjauuvvtlzvuppfqva.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd0Z2phdXV2dnRsenZ1cHBmcXZhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE2OTU0NDgsImV4cCI6MjAxNzI3MTQ0OH0.2cylCTQJX3W1zHruk0JGAO5yId1ivx6USjoMFuvZxqM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
