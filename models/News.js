// import database
const {query} = require("express");
const db = require("../config/database");
// membuat class News
class News {
  // buat fungsi
  static all() {
    return new Promise((resolve, reject) => {
        //Lakukan query ke db untuk ambil data
        const sql = "SELECT * FROM News";
        db.query(sql, (err, results) => {
            resolve(results);
        }); 
    });        
}

static async create(data) {
    const id = await new Promise((resolve, reject) =>{
        //query insert ke database
        const sql = 'INSERT INTO News SET ?'
        db.query(sql,data,(err,results) => {
            resolve(results.insertId);
        });
    });

    return new Promise((resolve, reject) => {
        //query select by id
        const sql = 'SELECT * FROM patients WHERE id = ?'
        db.query(sql,id,(err,results) => {
            resolve(results);
        });
    });
}

static find(id) {
    //Lakukan promise SELECT BY ID
    return new Promise((resolve, reject) => {
        //query select by id
        const sql = 'SELECT * FROM News WHERE id = ?'
        db.query(sql,id,(err,results) => {
            resolve(results[0]);
        });
    });
}

static search(title) {
    //Lakukan promise SELECT BY TITLE
    return new Promise((resolve, reject) => {
        //query select by title
        const sql = 'SELECT * FROM News WHERE title = ?'
        db.query(sql,title,(err,results) => {
            //console.log(title);
            resolve(results);
        });
    });
}

static findByCategory(category) {
    //Lakukan promise SELECT BY CATEGORY
    return new Promise((resolve, reject) => {
        //query select by category
        const sql = 'SELECT * FROM News WHERE category = ?'
        db.query(sql,category,(err,results) => {
            //console.log(category);
            resolve(results);
        });
    });
}

static async update(id, data) {
    //Update data
    await new Promise ((resolve, reject) => {
        //Query untuk update data
        const sql = "UPDATE News SET ? WHERE id = ?";
        db.query(sql, [data, id], (err, results) => {
            (resolve(results));
        });
    });

    //SELECT data by id 
    const News = await this.find(id);
    return News;
}

static delete(id) {
    // Query delete 
    return new Promise ((resolve, reject) => {
        const sql = "DELETE FROM News WHERE id = ?";
        db.query(sql, id, (err, results) => {
            resolve(results);
        });
    });
}
}

// export class News
module.exports = News;
