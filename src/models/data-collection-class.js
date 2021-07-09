'use strict';

const pool=require('../models/pool');
class Model{
    constructor(model,name){
        this.model=this.model;
        this.name=name;

    }

    get(_id){
        if(_id){
            return pool.query('SELECT * FROM $1 WHERE id=$2;',[this.model,_id]);
        }
        else{
            return pool.query('SELECT * FROM $1',[this.model]);
        }
    }

    create(obj){
        let sql=`INSERT INTO ${this.model} (${this.name}) VALUES $1 TERURNING *`;
        let saveValue=[this.model,obj];
        return pool.query(sql,saveValue);
         
    }
    update(_id,obj){
        let sql=`UPDATE ${this.model} SET name=$1 WHERE id=$2 RETURNING *;`;
        let saveValue=[obj.name,_id];
        return pool.query(sql,saveValue);        
    }
       
    delete(_id){
        return pool.query('DELETE FROM $1 WHERE $2 RETURNING *;',[this.model,id]);

    }
}
module.exports=Model;
