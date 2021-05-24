const TokenUtil = require("../utils/token");

const checkToken = async (req, res, next) => {
    try {
        const token = req.headers.authorization;
        if (!token) {
            res.send({
                status: false,
                message: "Lối: Bạn chưa đăng nhập",
            });
        }
        const verifyToken = await TokenUtil.verifyToken(token);
        if (!verifyToken) {
            res.send({
                status: false,
                message: "Lỗi Token",
            });
        }
        req.user = verifyToken.user;

        return next();
    } catch (error) {
        res.send({
            status: false,
            message: error.toString(),
        });
    }
};

module.exports = {
    checkToken,
};
