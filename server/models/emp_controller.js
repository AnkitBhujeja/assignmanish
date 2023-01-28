const neo4j = require('neo4j-driver');
var uuid = require('uuid');
const uri = 'neo4j+s://74f312f9.databases.neo4j.io';
const user = 'neo4j';
const password = 'yH4eXXjRiPoR3IP3WpOikyQljxnzcYnQUmxloDJpvRw';
const driver = neo4j.driver(uri, neo4j.auth.basic(user, password));
    const session = driver.session({ database: 'neo4j' });

const findAll = async () =>{
    const result = await session.run(`Match (u:User) return u`)
    return result.records.map(i=>i.get('u').properties)
}

const findById = async (id) =>{
    const result = await session.run(`MATCH (u:User {_id : '${id}'} ) return u limit 1`)
    return result.records[0].get('u').properties
}
const create = async (user) =>{
    console.log(uuid.v1);
    const unique_id = uuid.v1();
    await session.run(`CREATE (u:User {_id : '${unique_id}', name: '${user.name}',mobile:'${user.mobile}', email: '${user.email}',gstin: '${user.gstin}',bank_account: '${user.bank_account}',bank_ifsc: '${user.ifsc}',password: '${user.password}',confirmpassword:'${user.confirmpassword}'} ) return u`)
    return await findById(unique_id)
}
const login= async (user) =>{
    console.log(uuid.v1);
    const unique_id = uuid.v1();
    const result = await  session.run(`MATCH (u:User {email:'${user.email}',password:'${user.password}'})  Return u`)
    console.log("result",result)
    return result.records[0].get('u').properties
}
const findByIdAndUpdate = async (id, user) =>{
    const result = await session.run(`MATCH (u:User {_id : '${id}'}) SET u.title= '${user.title}', u.description= '${user.description}' return u`)
    return result.records[0].get('u').properties
}
const findByIdAndDelete = async (id) =>{
    await session.run(`MATCH (u:User {_id : '${id}'}) DELETE u`)
    return await findAll()
}

module.exports ={
    findAll,
    findById,
    create,
    login,
    findByIdAndUpdate,
    findByIdAndDelete
}