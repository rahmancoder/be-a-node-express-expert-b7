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


const getAllUsers =async (req:Request, res:Response)=>
{


  try
  {

       const result = await profileService.getAllProfileFromDB();

   res.status(201).json(
    {
      success:true,
      message:"Profile All Users",
      //data:result.row[0],
      data:result.rows,

    }


   );
  }




   catch(error:any)
   {
       res.status(500).json(

    {
      success:false,
      message:error.message,
      error:error,
    }
   );
   }
}

export const profileController = {
  createProfile,
  getAllUsers,
};
