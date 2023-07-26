import pool from "../config/sql.js";

export const getAllTodos = async (_, response) => {
  try {
    const resultQuery = await pool.query("SELECT * FROM todos");
    const rows = resultQuery.rows;
    return response.status(200).json(rows);
  } catch (error) {
    return response.status(401).json(error);
  }
};

export const createTodo = async (req, res) => {
  const { text, completed } = req.body;

  try {
    const resultQuery = await pool.query(
      "INSERT INTO todos(todotext,completed) VALUES($1,$2)",
      [text, completed]
    );
    const row = resultQuery.rows[0];
    return res.status(201).json(row);
  } catch (error) {
    return res.status(401).json(error);
  }
};

export const deleteTodo = async (req, res) => {
  const id = +req.params.id;

  try {
    await pool.query("DELETE FROM todos WHERE id = $1", [id]);
    return res.status(200).json({ message: "Todo deleted" });
  } catch (error) {
    return res
      .status(401)
      .json({ error: "An error occurred while deleting the todo" });
  }
};

export const clearALL = async (req, res) => {
  try {
    await pool.query("DELETE FROM todos");
    return res.status(200).json({ message: "All todos deleted successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "An error occurred while deleting all todos" });
  }
};

export const completeTodo = async (req, res) => {
  const id = +req.params.id;
  const { completed } = req.body;

  try {
    const resultQuery = await pool.query(
      "UPDATE todos SET completed = $1 WHERE id = $2 RETURNING *",
      [completed, id]
    );
    const row = resultQuery.rows[0];
    return res.status(200).json(row);
  } catch (error) {
    return res.status(500).json({
      error: "An error occurred while updating the completion status",
    });
  }
};
