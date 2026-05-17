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

// get all profiles from database

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

    if(result.rows.length===0)
    {
      res.status(404).json(
        {
          success:false,
          message:"Not Found",
          data:{}
        }
      );
    }

    res.status(201).json(
      {
        success:true,
        message:"single Profile retrieved",
        data: result.rows[0],
      }

    );

  } 
  catch (error:any) {
    
    res.status(500).json(

      {
        success:false,
        message:"something went wrong",
        error:error, 
      }
    );
  }

}


//Update Profile by ID

const updateProfile =async(req:Request, res:Response)=>{

  const {id} = req.params;
 
  // sending 2 parameters , 1. full object 2. id getting from req.params from client
  const result= await profileService.updateProfileIntoDB(req.body, id as string);
  try{

    // logic comes here

    if(result.rows.length===0)
    {
       res.status(404).json(
        {
          success:false,
          message:"Not Found",
          data:{},
        }
       );
    }

    res.status(201).json(

      {
        success:true,
        message:"Profile Updated Successfully",
        data:result.rows[0],
      }
    );


  }

  catch(error:any)
  {
    res.status(500).json(
      {
        success:false,
        message:"something wrong",
        error:error,

      }
    );

  }



};






// DELEte Profile by ID

const deleteProfile=async(req:Request, res:Response)=>
{

  const {id} =req.params;

  const result= await profileService.deleteProfileFromDB(id as string);
try 
{

  // if(result.rows.length===0)
 if(result.rowCount===0)
  {
    res.status(404).json(
      {
        success:false,
        message:"Profile Not Found",
        // data:{}, // there is no data 
      }
    );
  }

  res.status(200).json(
    {
      success:true,
      message:"Profile deleted successfully",
      data:{},
    }
  );
  
} 


catch (error:any) {

  res.status(500).json(
    {
      success:false,
      message:"something wrong",
      // message:error.message,
      error:error,
    }
  );
}



};

export const profileController = {
  createProfile,
  getAllProfile,
  getSingleProfile,
  updateProfile,
  deleteProfile,
};
