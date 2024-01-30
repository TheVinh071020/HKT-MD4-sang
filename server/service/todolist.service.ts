import db from "../utils/database";

interface Todo {
  id: number;
  name: string;
  status: number;
}

export const findAllService = async () => {
  return await db.execute("SELECT * FROM todo");
};

export const findIdService = async (id: number) => {
  return await db.execute("SELECT * FROM todo WHERE todo_id = ?", [id]);
};

export const createService = async (data: Todo) => {
  const { name, status } = data;
  return await db.execute("INSERT INTO todo (name, status) VALUES (?, ?)", [
    name,
    status,
  ]);
};

export const updateService = async (status: number, id: number) => {
  return await db.execute("UPDATE todo SET status = ? WHERE todo_id = ?", [
    1,
    id,
  ]);
};

export const deleteService = async (id: number) => {
  return await db.execute("DELETE FROM todo WHERE todo_id = ?", [id]);
};
