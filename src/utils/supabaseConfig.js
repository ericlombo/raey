"use client"

import { createClient } from '@supabase/supabase-js'

const supaBaseUrl ="https://snfdnsrbwbcyvisenswl.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNuZmRuc3Jid2JjeXZpc2Vuc3dsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTIyNzc1NjMsImV4cCI6MjAwNzg1MzU2M30.t-HF83nFKjRwdhCqmo0g1rEr_F-OCnR2nMPX01qgsqk"

const supabase = createClient(supaBaseUrl, supabaseKey)

export { supabase }