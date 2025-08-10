 import Note from "../models/Note.js"
 

 export  const getAllNotes = async (req, res) => {
    try {
        const notes= await Note.find()
        res.status(200).json(notes)
        console.log("Notes found", notes)
        
    } catch (error) {
        res.status(500).json({message: "internal server error"});
        console.error("error in getAllNotes controller", error)
    }
   
}


export  const getNotesById = async (req, res) => {
    try {
        const note = await Note.findById(req.params.id)
        res.status(200).json(note)
        console.log("requested Note found", note)
        
    } catch (error) {
        res.status(500).json({message: "internal server error"});
        console.error("error in getNotesById controller", error)
    }
   
}

export const createNote = async (req, res) => {
    
    try {
        const {title , content} = req.body
        const newNote = new Note({title: title, content:content})
        await newNote.save()
         res.status(201).json({message:"Note Created Successfully"})
    } catch (error) {
        console.error("error in createNote controller", error)
        res.status(500).json({message: "internal server error"});
        
    }

}
export const updateNoteById = async (req,res) => {
    try {
        const {title, content} = req.body;
        const id = req.params.id;
        // console.log({title,content},id)

         const newNote = await Note.findByIdAndUpdate(
            id,
            {title,content},
            {
                new: true
            }
          ) 
          if(!newNote) return res.status(404).json({message: "note not found"})

        res.status(200).json({message: "note updated sucessfully", updated : newNote})
    } catch (error) {
        console.error("error in updateNoteById controller", error)
        res.status(500).json({message: "internal server error"});
    }
    }


export const deleteNoteById =  async (req, res ) => {
    try {
        const deletedNote = await Note.findByIdAndDelete(req.params.id)

        res.status(200).json({message: "Note deleted successfully",deletedNote})
    } catch (error) {
        console.error("error in deleteNoteById controller", error)
        res.status(500).json({message: "internal server error"});
    }
    }