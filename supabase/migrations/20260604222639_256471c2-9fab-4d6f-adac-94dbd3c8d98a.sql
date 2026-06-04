ALTER TABLE public.analytics_events 
  ADD COLUMN IF NOT EXISTS event_type text,
  ADD COLUMN IF NOT EXISTS session_id text,
  ADD COLUMN IF NOT EXISTS metadata jsonb DEFAULT '{}'::jsonb;

UPDATE public.analytics_events SET event_type = event WHERE event_type IS NULL AND event IS NOT NULL;

CREATE INDEX IF NOT EXISTS idx_analytics_events_type_date ON public.analytics_events(event_type, created_at DESC);

GRANT SELECT, INSERT ON public.analytics_events TO anon, authenticated;
GRANT ALL ON public.analytics_events TO service_role;