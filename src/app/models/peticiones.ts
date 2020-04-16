export class Peticiones {

    public id_peticion: number 
    public categoria:String 
    public foto: String 
    public titulo:String 
    public precio:number 
    public localizacion: String 
    public descripcion: String 
    public fecha_finalizacion: Date 
    public estado: String
    public valorada_creador:boolean
    public valorada_solicitante: boolean
    public id_creador: number
    public id_solicitante: number

    constructor(){

        
    }
}
