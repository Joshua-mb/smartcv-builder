// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://lidtyxpyxytpfpnuxdks.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxpZHR5eHB5eHl0cGZwbnV4ZGtzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc5MzEyNzYsImV4cCI6MjA1MzUwNzI3Nn0.VbNIui_2aTVa1o9StBvWXYaikkEK8eY0cfsoVTf25DE";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);