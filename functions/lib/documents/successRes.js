"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (res, send = { success: true }) => {
    res.status(200).json(Object.assign({ success: true }, send));
};
//# sourceMappingURL=successRes.js.map