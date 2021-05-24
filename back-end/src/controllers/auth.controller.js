const UserModel = require("../models/user.model");
const PasswordUtils = require("../utils/password");
const TokenUtil = require("../utils/token");

const signup = async (email, password, lastName, firstName) => {
    try {
        const user = await UserModel.find({ email });
        if (user.length) {
            return {
                status: 2,
                message: "Lỗi: Vui lòng kiếm ta lại. Email đã tồn tại.",
            };
        }
        const newPass = await PasswordUtils.hash(password);
        console.log(newPass);
        const newUser = new UserModel({
            email,
            password: newPass,
            lastName,
            firstName,
        });
        const result = await newUser.save();
        if (!result) {
            return {
                status: 2,
                message: "Lối hệ thống",
            };
        }
        return {
            status: true,
            data: result,
        };
    } catch (error) {
        return {
            status: 3,
            message: error.toString(),
        };
    }
};
const login = async (email, password) => {
    try {
        const user = await UserModel.findOne({ email });
        const comparePass = await PasswordUtils.verify(password, user.password);
        if (!comparePass) {
            return {
                status: false,
                message: "Sai mật khẩu, có lẽ bạn đã quên mật khẩu, có thể bấm quên mật khẩu.",
            };
        }
        const accessToken = await TokenUtil.generateToken(user);
        return {
            status: true,
            data: {
                user: {
                    email: user.email,
                    lastName: user.lastName,
                    firstName: user.firstName,
                },
                accessToken,
            },
        };
    } catch (error) {
        return {
            status: 3,
            message: error.toString(),
        };
    }
};
module.exports = {
    signup,
    login,
};
