from fastapi import APIRouter
router = APIRouter()
@router.get('/')
def get_backup():
    return {'status': 'ok'}
