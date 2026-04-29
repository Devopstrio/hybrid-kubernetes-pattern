from fastapi import APIRouter
router = APIRouter()
@router.get('/')
def get_deployments():
    return {'status': 'ok'}
