import { Router } from 'express';
import tipoController from '../controllers/tipoController';

class TipousuarioRoutes{
    public router : Router = Router();//Se está creando la propiedad que guardara el objeto devuelto y se inicializa esta propiedad en la misma línea de código. 
    
    constructor(){
        this.config();
    }
    config():void{
        this.router.get('/',tipoController.list);//Creando una ruta de mi aplicación del servidor para  la ruta inicial y se devuelve el mensaje Hello.
        this.router.post('/',tipoController.create);
        this.router.delete('/:IdTipo',tipoController.delete); //aquí se indica que recibe como parámetro el id  del juego para poder eliminarlo.
        this.router.put('/:IdTipo',tipoController.update);
        this.router.get('/:IdTipo',tipoController.getOne);
    }
}

const tipousuarioRoutes = new TipousuarioRoutes()
export default tipousuarioRoutes.router;