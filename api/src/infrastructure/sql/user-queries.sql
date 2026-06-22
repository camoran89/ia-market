-- user-queries.sql
SELECT_USER_BY_CREDENTIALS: SELECT email, password, role, subscription_active, created_at FROM users WHERE email = $1 AND password = $2;
INSERT_USER: INSERT INTO users(email, password, role, subscription_active, created_at) VALUES($1, $2, $3, $4, $5);
