-- postgres-schema-queries.sql
CREATE_USERS_TABLE: CREATE TABLE IF NOT EXISTS users (
  email TEXT PRIMARY KEY,
  password TEXT NOT NULL,
  role TEXT NOT NULL,
  subscription_active BOOLEAN DEFAULT FALSE,
  created_at TEXT NOT NULL
);

CREATE_ORDERS_TABLE: CREATE TABLE IF NOT EXISTS orders (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  vendor_id TEXT NOT NULL,
  items JSONB NOT NULL,
  total_amount NUMERIC NOT NULL,
  status TEXT NOT NULL,
  payment_status TEXT NOT NULL,
  fulfillment_status TEXT NOT NULL,
  created_at TEXT NOT NULL,
  metadata JSONB
);

CREATE_CATALOG_ITEMS_TABLE: CREATE TABLE IF NOT EXISTS catalog_items (
  id TEXT PRIMARY KEY,
  vendor_id TEXT NOT NULL,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  price NUMERIC NOT NULL,
  available BOOLEAN NOT NULL,
  image_url TEXT,
  category TEXT,
  created_at TEXT NOT NULL
);

CREATE_SUBSCRIPTIONS_TABLE: CREATE TABLE IF NOT EXISTS subscriptions (
  id TEXT PRIMARY KEY,
  vendor_id TEXT NOT NULL,
  plan TEXT NOT NULL,
  active BOOLEAN NOT NULL,
  started_at TEXT NOT NULL
);
