-- subscription-queries.sql
UPSERT_SUBSCRIPTION: INSERT INTO subscriptions(id, vendor_id, plan, active, started_at)
VALUES($1,$2,$3,$4,$5)
ON CONFLICT (id) DO UPDATE SET
  vendor_id = EXCLUDED.vendor_id,
  plan = EXCLUDED.plan,
  active = EXCLUDED.active,
  started_at = EXCLUDED.started_at;
SELECT_SUBSCRIPTION_BY_VENDOR: SELECT * FROM subscriptions WHERE vendor_id = $1 LIMIT 1;
