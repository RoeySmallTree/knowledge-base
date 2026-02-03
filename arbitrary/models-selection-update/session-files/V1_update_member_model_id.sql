-- Update member.model_id based on complete.json (members present in members-ids.json)
BEGIN;
WITH updates(member_id, model_id) AS (
  VALUES
    ('770b36b7-e029-447a-9cc9-7ef7ce4e631b', 65),
    ('45b63ea4-4c5c-467b-a294-dc31989f415e', 151),
    ('134cf28c-0c29-469c-a29e-336ef43ad447', 151),
    ('5a3e135b-4e5e-459b-b3ae-449d040131d3', 151),
    ('73315c3a-5245-4107-a27b-2b6a865c5e8d', 191),
    ('61278e70-bf07-4c5c-92c2-f56c3bcaf424', 191),
    ('6f18339c-7da8-4e9a-9dbb-ec74c27ce90d', 151),
    ('376aeee2-ef74-4097-9d4f-973cc5a3d3d0', 136)
)
UPDATE public.member m
SET model_id = updates.model_id
FROM updates
WHERE m.id = updates.member_id;
COMMIT;
