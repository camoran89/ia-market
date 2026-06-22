# Kubectel Deployment for IA Marketplace

This folder mirrors Kubernetes manifests using the `kubectel` name for the deployment folder.

## Apply
```bash
kubectel apply -f kubectel/namespace.yaml
kubectel config set-context --current --namespace=ia-marketplace
kubectel apply -f kubectel/postgresql-deployment.yaml
kubectel apply -f kubectel/api-deployment.yaml
kubectel apply -f kubectel/app-deployment.yaml
kubectel apply -f kubectel/ingress.yaml
```

## Notes
- PostgreSQL uses `ia_marketplace`, `ia_market_user`, `ia_market_pass`.
- Build images with tags `ia-marketplace-api:latest` and `ia-marketplace-app:latest` before deployment.
- Frontend proxies `/api` to `ia-marketplace-api:4000`.
