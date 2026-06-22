-- order-queries.sql
UPSERT_ORDER: INSERT INTO orders(id, user_id, vendor_id, items, total_amount, status, payment_status, fulfillment_status, created_at, metadata)
VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)
ON CONFLICT (id) DO UPDATE SET
  user_id = EXCLUDED.user_id,
  vendor_id = EXCLUDED.vendor_id,
  items = EXCLUDED.items,
  total_amount = EXCLUDED.total_amount,
  status = EXCLUDED.status,
  payment_status = EXCLUDED.payment_status,
  fulfillment_status = EXCLUDED.fulfillment_status,
  metadata = EXCLUDED.metadata;
SELECT_ORDERS_BY_USER: SELECT * FROM orders WHERE user_id = $1;
SELECT_ORDERS_BY_VENDOR: SELECT * FROM orders WHERE vendor_id = $1;
