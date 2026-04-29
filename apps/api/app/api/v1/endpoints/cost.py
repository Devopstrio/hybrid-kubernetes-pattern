from fastapi import APIRouter
router = APIRouter()
@router.get('/')
def get_cost():
    return {'status': 'ok'}
