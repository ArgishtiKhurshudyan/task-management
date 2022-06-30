import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },

    description: {
      type: String,
      require: true,
    },
    priority: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Todo", TodoSchema);
