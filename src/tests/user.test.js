require("../config/config")
const request = require("supertest");
const app = require("../index")


const user = require("../models/user")

describe("Get user", ()=> {
 
    
    it("return users in MongoDB", async () =>{

        const response = await request(app).post("/login").send({
            email:"prueba@gmail.com",
            password: "12345"    

        });

        expect(response.body).not.toBeNull()


    });
   

})