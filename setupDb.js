const sqlite = require('sqlite')
async function setupDb() {
    console.log("Open sqlite...");
    const knex = require('knex')({
        client: 'sqlite3',
        connection: {
            filename: "./mydb.sqlite"
        }
    });

    try {
        const db = await sqlite.open({
            filename: './mydb.sqlite',
            driver: sqlite.Database
        }).then(db=>{
            console.log("Connected");
            return db;
        }).catch(exception=>{
            console.log("Cannot connect ", exception)
        })

        console.log("Setup db", db)
        await db.migrate({force: true});

        const people = await db.all("SELECT * FROM Category");
        console.log(JSON.stringify(people, null, 2));
    } catch (exception) {
        console.error("Cannot setup DB, ", exception)
    }
}

console.log("Start to migrate database...")
setupDb().then(()=>console.log("Database is successfully migrated"));
