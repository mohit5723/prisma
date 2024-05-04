import { PrismaClient } from "@prisma/client";
import { log } from "console";

const prisma = new PrismaClient();

async function insertUser(username: string, password: string, firstname: string, lastname: string) {
  const res = await prisma.user.create({
    data: {
        username,
        password,
        firstname,
        lastname
    },
    // what should the res contain
    select:{
        password:true,
        id:true,
    }
  })
  console.log(res);
}

// insertUser("admin1", "123456", "mohit", "puri")

interface userParams {
    firstname:string,
    lastname:string
}

async function updateUser(username:string,{firstname,lastname}:userParams){
    const res = await prisma.user.update({
        where:{username},
        data:{
            firstname,
            lastname
        }

    })
    console.log(res);
    
}

updateUser("admin1", {firstname:"yohit", lastname:"puri"})