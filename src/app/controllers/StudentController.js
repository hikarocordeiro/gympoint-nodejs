import * as Yup from 'yup';
import { Op } from 'sequelize';
import Student from '../models/Student';

class StudentController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      age: Yup.string().required(),
      weight: Yup.string().required(),
      height: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }
    const studentExists = await Student.findOne({
      where: { email: req.body.email },
    });

    if (studentExists) {
      return res.status(400).json({ error: 'Student already exists.' });
    }

    return res.json(await Student.create(req.body));
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      id: Yup.number().required(),
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      age: Yup.string().required(),
      weight: Yup.string().required(),
      height: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { id, email } = req.body;

    const student = await Student.findByPk(id);

    if (email !== student.email) {
      const studentExists = await Student.findOne({ where: { email } });

      if (studentExists) {
        return res.status(400).json({ error: 'Student already exists.' });
      }
    }

    return res.json(await student.update(req.body));
  }

  async index(req, res) {
    const { page = 1, name } = req.query;
    const students = await (name
      ? Student.findAll({
          attributes: ['id', 'name', 'email', 'age', 'weight', 'height'],
          limit: 20,
          offset: (page - 1) * 20,
          where: { name: { [Op.iLike]: `%${name}%` } },
        })
      : Student.findAll({
          attributes: ['id', 'name', 'email', 'age', 'weight', 'height'],
          limit: 20,
          offset: (page - 1) * 20,
        }));
    return res.json(students);
  }
}

export default new StudentController();
