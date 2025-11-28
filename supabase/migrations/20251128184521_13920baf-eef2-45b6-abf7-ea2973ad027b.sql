-- Criar bucket público para vídeos
INSERT INTO storage.buckets (id, name, public)
VALUES ('videos', 'videos', true);

-- Criar política RLS para permitir leitura pública dos vídeos
CREATE POLICY "Permitir leitura pública de vídeos"
ON storage.objects FOR SELECT
USING (bucket_id = 'videos');