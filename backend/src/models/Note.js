import mongoose from "mongoose";

// step 1 create a schema 
// step 2 use schema to create model
// use model to create update ... etc

const noteSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        }
    }, {timestamps:true}
)

const Note = mongoose.model("Note", noteSchema);

export default Note;