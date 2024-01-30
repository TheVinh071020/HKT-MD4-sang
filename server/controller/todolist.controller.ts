import { Request, Response } from "express";
import * as todoService from "../service/todolist.service";

interface Todo {
  id: number;
  name: string;
  status: number;
}

export const findAll = async (req: Request, res: Response) => {
  try {
    const [data] = await todoService.findAllService();
    res.json({
      data,
    });
  } catch (error) {
    res.json({
      message: "Get todo error",
    });
  }
};

export const create = async (req: Request, res: Response) => {
  try {
    const [data] = await todoService.createService(req.body);
    res.json({
      message: "Thêm thành công",
    });
  } catch (error) {
    res.json({
      error,
      message: "Create todo err",
    });
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const [row]: any = await todoService.findIdService(Number(id));
    if (row.length === 0) {
      return res.json({
        message: "Không tìm thấy người dùng để cập nhật.",
      });
    } else {
      await todoService.updateService(Number(status), Number(id));
      return res.json({
        message: "Cập nhật thông tin người dùng thành công.",
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export const deleteTodo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await todoService.deleteService(Number(id));
    const [data] = await todoService.findAllService();
    res.json({
      message: "Xóa thành công",
      todo: data,
    });
  } catch (error) {
    res.json({
      message: "Xóa người dùng không thành công",
    });
    console.log(error);
  }
};
