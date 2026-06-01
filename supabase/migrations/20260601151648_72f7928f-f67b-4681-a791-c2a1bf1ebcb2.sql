ALTER TABLE public.app_settings ALTER COLUMN platform_name SET DEFAULT 'Loly Fashion';
ALTER TABLE public.app_settings ALTER COLUMN invoice_name SET DEFAULT 'Loly Fashion';
UPDATE public.app_settings SET platform_name = 'Loly Fashion' WHERE id = 'main' AND platform_name = 'Family Fashion';
UPDATE public.app_settings SET invoice_name = 'Loly Fashion' WHERE id = 'main' AND invoice_name = 'Family Fashion';