import type { Request, Response } from "express";
import { profileService } from "./profile.service";
import { error } from "console";

const createProfile = async (req: Request, res: Response) => {
  try {
    const result = await profileService.createProfileIntoDB(req.body);
    res.status(201).json({
      success: true,
      message: "Profile created successfully!",
      data: result.rows[0],
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
      error: error,
    });
  }
};


const getAllProfile = async (req:Request, res:Response)=>
{

  try
  {
  const result = await profileService.getAllProfileFromDB();

   res.status(201).json({
      success:true,
      message:"ALL Profile Get Succssfully",
      data:result.rows,

    });
  }


   catch(error:any)
   {
      res.status(500).json({
      success:false,
      message:error.message,
      error:error,
    });
   }
};

//get Single Profile from Database

const getSingleProfile =async (req:Request, res:Response)=>
{

  const {id} =req.params;
  try {
    const result = await profileService.getSingleProfileFromDB(id as string);

    // implement logic for result now if id match found what will be the response 
    // what if , if the id match not found, write response logic here

  } 
  catch (error:any) {
    
  }

}
export const profileController = {
  createProfile,
  getAllProfile,
  getSingleProfile,
};
