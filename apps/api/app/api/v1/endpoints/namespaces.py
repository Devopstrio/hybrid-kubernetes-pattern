from fastapi import APIRouter
router = APIRouter()
@router.get('/')
def get_namespaces():
    return {'status': 'ok'}
