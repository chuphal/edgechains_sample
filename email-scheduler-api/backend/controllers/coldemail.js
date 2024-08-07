import { StatusCodes } from "http-status-codes";
import { BadRequestError } from "../errors/bad-request.js";
import { CustomAPIError } from "../errors/custom-api.js";
import agenda from "../utils/agenda.js";
import Coldemail from "../models/Coldemail.js";

export const coldemail = async (req, res) => {
  const { to, subject, text, delay } = req.body;
  console.log({ to, subject, text, delay });
  if (!to || !subject || !text || !delay) {
    throw new BadRequestError("Required all the fields");
  }

  try {
    const schedule = await agenda.schedule(
      `in ${delay}`,
      "schedule-coldemail",
      {
        to,
        subject,
        text,
      }
    );
    const emailPersist = await Coldemail.create({
      to,
      subject,
      text,
      delay,
    });
    console.log("persist", emailPersist);
    res.status(StatusCodes.CREATED).json({
      msg: "email schedulded successfully",
      emailId: emailPersist._id,
    });
  } catch (error) {
    console.log(error);
    throw new CustomAPIError(
      "error scheduling email",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
};

export const getColdemail = async (req, res) => {
  try {
    const userId = req.user.userId;
    const emails = await Coldemail.find({ userId });

    res
      .status(StatusCodes.OK)
      .json({ msg: "successfully get the scheduled", emails });
  } catch (error) {
    console.log("Error in getCOoldmail route", error);
    throw new CustomAPIError(
      "Error in getCOoldmail route",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
};
