import Todo from "../model/Todo.js";

export const createTodo = async (req, res) => {
  const newTodo = new Todo(req.body);
  try {
    await newTodo.save();
    res.status(200).json("to do is created");
  } catch (err) {
    res.status(401).json(err);
  }
};

export const getTodo = async (req, res) => {
  try {
    const todo = await Todo.find();

    res.status(200).json(todo);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const updateTodo = async (req, res) => {
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(201).json(updatedTodo);
  } catch (err) {
    res.status(401).json(err);
  }
};

export const deleteTodo = async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);
    res.status(201).json("to do has been deleted");
  } catch (err) {
    res.status(401).json(err);
  }
};
