import {Router, Request, Response} from 'express';
import { json } from 'body-parser';

const router = Router();

//un simple GET
router.get('/mensajes', (req: Request, res: Response)=>{
    res.json({
        ok: true,
        messaje: 'Todo esta bien GET!!'
    });
});

//un simple POST
router.post('/mensajes', (req: Request, res: Response)=>{

const parametro1 = req.body.parametro1;
const parametro2 = req.body.parametro2;
//console.log(req.headers);
    res.json({
        ok: true,
        messaje: 'Todo esta bien POST!!',
        parametro1,
        parametro2
    });
});

//un POST con un GET['id'] en la url
router.post('/mensajes/:id', (req: Request, res: Response)=>{

    const parametro1 = req.body.parametro1;
    const parametro2 = req.body.parametro2;
    const id = req.params.id;
    
        res.json({
            ok: true,
            messaje: 'Todo esta bien POST!!',
            parametro1,
            parametro2,
            id
        });
    });

export default router;

