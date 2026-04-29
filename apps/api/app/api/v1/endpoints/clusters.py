from fastapi import APIRouter
router = APIRouter()
@router.get("/")
def get_clusters():
    return [
        {"id": "c1", "name": "prod-us-east-1", "provider": "EKS", "status": "ACTIVE"},
        {"id": "c2", "name": "staging-vmware", "provider": "TANZU", "status": "ACTIVE"}
    ]
@router.post("/register")
def register_cluster():
    return {"status": "registered", "id": "c3"}
