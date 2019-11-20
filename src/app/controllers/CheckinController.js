import { Op } from 'sequelize';
import { subDays } from 'date-fns';

import Student from '../models/Student';
import Checkin from '../models/Checkin';

class CheckinController {
  async store(req, res) {
    const student = await Student.findByPk(req.params.id);

    if (!student) {
      return res.status(401).json({ error: 'Student does not exists.' });
    }

    const checkins = await Checkin.count({
      where: {
        student_id: student.id,
        created_at: {
          [Op.between]: [subDays(new Date(), 7), new Date()],
        },
      },
    });

    if (checkins >= 5) {
      return res
        .status(401)
        .json({ error: 'You cant checkin more than 5 times on 7 days.' });
    }

    const checkin = await Checkin.create({ student_id: req.params.id });

    return res.json(checkin);
  }

  async index(req, res) {
    const student = await Student.findByPk(req.params.id);

    if (!student) {
      return res.status(401).json({ error: 'Student does not exists.' });
    }

    const checkins = await Checkin.findAll({
      attributes: ['id', 'created_at'],
      where: { student_id: student.id },
    });

    return res.json(checkins);
  }
}

export default new CheckinController();
