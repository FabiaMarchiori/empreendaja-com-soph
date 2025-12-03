-- Create protected_tools table for storing tool URLs securely
CREATE TABLE public.protected_tools (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  url TEXT NOT NULL,
  description TEXT,
  icon TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.protected_tools ENABLE ROW LEVEL SECURITY;

-- Only authenticated users can read tools
CREATE POLICY "Authenticated users can read tools"
  ON public.protected_tools
  FOR SELECT
  TO authenticated
  USING (true);

-- Insert the protected tools
INSERT INTO public.protected_tools (slug, name, url, description, icon) VALUES
  ('logo', 'Criar Logomarca', 'https://crieseulogo.lovable.app', 'Crie sua logomarca profissional', 'Palette'),
  ('mei', 'Abrir MEI', 'https://abrindoseumei.lovable.app', 'Guia completo para abrir seu MEI', 'FileText'),
  ('website', 'Domínio e Site', 'https://crieseudominioesite.lovable.app', 'Crie seu domínio e site', 'Globe'),
  ('marketplace', 'Vender em Marketplaces', 'https://vendendonosmarketplaces.lovable.app', 'Aprenda a vender online', 'ShoppingBag'),
  ('brand', 'Registrar Marca', 'https://empreende-ja-soph.lovable.app', 'Guia de registro de marca', 'Award');