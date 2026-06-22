-- catalog-queries.sql
UPSERT_CATALOG_ITEM: INSERT INTO catalog_items(id, vendor_id, name, description, price, available, image_url, category, created_at)
VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9)
ON CONFLICT (id) DO UPDATE SET
  vendor_id = EXCLUDED.vendor_id,
  name = EXCLUDED.name,
  description = EXCLUDED.description,
  price = EXCLUDED.price,
  available = EXCLUDED.available,
  image_url = EXCLUDED.image_url,
  category = EXCLUDED.category,
  created_at = EXCLUDED.created_at;
SELECT_CATALOG_BY_VENDOR: SELECT * FROM catalog_items WHERE vendor_id = $1;
