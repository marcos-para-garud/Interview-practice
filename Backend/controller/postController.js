import { Post } from "../models/postModel.js";

// inserting the 4 fields

export const inserting = async (req , res)=>{
    try {
        const {id , name , salary , age} = req.body;
        const table = new Post({id , name , salary , age});
        await table.save();
        console.log("fields are inserted");
        return res.status(201).json({ message: 'Post inserted successfully', post: table })
    } catch (error) {
        console.log("error in inserting the data");
        return res.status(404).json({ message: 'Error in fetching data' })
        
    }
}

export const add = async (req , res)=>{
    try {
        const addFields = await Post.aggregate(
            [
                {
                  '$group': {
                    '_id': null, 
                    'totalSalary': {
                      '$sum': '$salary'
                    }
                  }
                }
              ]
        )
    } catch (error) {
        console.log("error in adding salaries");
        
    }
}