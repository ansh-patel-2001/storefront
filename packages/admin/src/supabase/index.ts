import { createClient } from '@supabase/supabase-js'

const projectUrl = import.meta.env.VITE_PROJECT_URL
const projectApiKey = import.meta.env.VITE_API_KEY

export const supabase = createClient(projectUrl, projectApiKey)
