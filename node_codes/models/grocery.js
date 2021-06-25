const db=require('../util/database');
//taking database from util and puting here in modules file
module.exports=class Grocery{
    constructor(id,item){
        this.id=id;
        this.item=item;
    }
    static fetchAll(){
        return db.execute('SELECT * FROM groceries')
        // return the table of mysql database
    }
    static post(item){
        return db.execute('INSERT INTO groceries (item) VALUES (?)', [item]);
        //it will add item in grocery
    }
    static update(id,item){
        return db.execute('UPDATE groceries SET item = ? WHERE id = ?',[item,id]);
    }
    static delete(id){
        return db.execute('DELETE FROM groceries WHERE id= ?',[id]);
    }
    
};