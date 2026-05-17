import { pool } from "../../db";
import type { IProfile } from "./profile.interface";

const createProfileIntoDB = async (payload: any) => {
  //   console.log(payload);
  const { user_id, bio, address, phone, gender } = payload;
  // Fisrt check if the user is exists
  const user = await pool.query(
    `
    SELECT * FROM users WHERE id=$1
    `,
    [user_id],
  );
  //   console.log(user);
  if (user.rows.length === 0) {
    throw new Error("User not exists!");
  }

  const result = await pool.query(
    `
   INSERT INTO profiles(user_id, bio, address, phone, gender) VALUES($1,$2,$3,$4,$5) RETURNING *
    `,
    [user_id, bio, address, phone, gender],
  );
  return result;
};


// GET all Profiles from Database

const getAllProfileFromDB = async () => {

  const result =await pool.query(`
    SELECT * FROM profiles `
  );
return result;
};

//get Single Profile from Database

const getSingleProfileFromDB = async (id:string)=>{
  const result= await pool.query(` SELECT * FROM profiles where id=$1 `, [id],);
  return result;
};


//Update Profile by ID

const updateProfileIntoDB=async (payload:IProfile, id:string)=>
{
  // destructering form payload the information fields needs to update in Profile table

 const {bio,address,phone,gender}=payload;

  const result=await pool.query(`
    UPDATE profiles 
    SET
    bio=COALESCE($1, bio),
    address=COALESCE($2,address),
    phone=COALESCE($3,phone),
    gender=COALESCE($4,gender)

    WHERE id=$5 RETURNING *
    
    
    `,[bio,address, phone,gender,id],);


// Without COALESCE defult value will become null ?

  // const result=await pool.query(`
  //   UPDATE profiles 
  //   SET
  //   bio=COALESCE($1, bio),
  //   address=COALESCE($2,address),
  //   phone=COALESCE($3,phone),
  //   gender=COALESCE($4,gender)

  //   WHERE id=$5 RETURNING *
    
    
  //   `,[bio,address, phone,gender,id],);



  return result;
};


const deleteProfileFromDB= async(id:string)=>
{

  const result= await pool.query(`
    
    DELETE FROM profiles WHERE id=$1
    
    `,[id],);

  return result;

};


export const profileService = {
  createProfileIntoDB,
  getAllProfileFromDB,
  getSingleProfileFromDB,
  updateProfileIntoDB,
  deleteProfileFromDB

};
