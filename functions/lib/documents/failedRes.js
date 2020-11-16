"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (res, status = 500, errorMessage = "") => {
    res.status(status).json({ success: false, errorMessage });
};
//# sourceMappingURL=failedRes.js.map