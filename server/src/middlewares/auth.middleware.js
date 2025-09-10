import jwt from "jsonwebtoken";

export async function auth(req, res, next) {
  try {
    const token = req.cookies.token;
    const decoded = jwt.verify(token, process.env.SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.send({msg: "You must log in to the system"});
  }
}
