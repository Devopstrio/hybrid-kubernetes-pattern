from fastapi import APIRouter
from app.api.v1.endpoints import auth, clusters, namespaces, deployments, policies, backup, cost, dashboard

api_router = APIRouter()
api_router.include_router(auth.router, prefix="/auth", tags=["auth"])
api_router.include_router(clusters.router, prefix="/clusters", tags=["clusters"])
api_router.include_router(namespaces.router, prefix="/namespaces", tags=["namespaces"])
api_router.include_router(deployments.router, prefix="/deployments", tags=["deployments"])
api_router.include_router(policies.router, prefix="/policies", tags=["policies"])
api_router.include_router(backup.router, prefix="/backup", tags=["backup"])
api_router.include_router(cost.router, prefix="/cost", tags=["cost"])
api_router.include_router(dashboard.router, prefix="/dashboard", tags=["dashboard"])
