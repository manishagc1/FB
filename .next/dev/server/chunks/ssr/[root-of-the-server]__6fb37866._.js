module.exports = [
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/http2 [external] (http2, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http2", () => require("http2"));

module.exports = mod;
}),
"[externals]/assert [external] (assert, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}),
"[externals]/tty [external] (tty, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[project]/FB/lib/api/axios.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$FB$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/FB/node_modules/axios/lib/axios.js [app-rsc] (ecmascript)");
;
const axiosInstance = __TURBOPACK__imported__module__$5b$project$5d2f$FB$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    headers: {
        "Content-Type": "application/json"
    },
    withCredentials: true
});
// Optional: Response interceptor to handle global errors
axiosInstance.interceptors.response.use((response)=>response, (error)=>{
    // Here you can handle global API errors
    console.error("API Error:", error.response?.data?.message || error.message);
    return Promise.reject(error);
});
const __TURBOPACK__default__export__ = axiosInstance;
}),
"[project]/FB/lib/api/endpoints.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

//backend routes
__turbopack_context__.s([
    "API",
    ()=>API
]);
const API = {
    AUTH: {
        REGISTER: "/api/auth/register",
        LOGIN: "/api/auth/login"
    }
};
}),
"[project]/FB/lib/api/auth.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "loginUser",
    ()=>loginUser,
    "registerUser",
    ()=>registerUser
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$FB$2f$node_modules$2f$axios$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/FB/node_modules/axios/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$FB$2f$lib$2f$api$2f$axios$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/FB/lib/api/axios.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$FB$2f$lib$2f$api$2f$endpoints$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/FB/lib/api/endpoints.ts [app-rsc] (ecmascript)");
;
;
;
const registerUser = async (data)=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$FB$2f$lib$2f$api$2f$axios$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].post(__TURBOPACK__imported__module__$5b$project$5d2f$FB$2f$lib$2f$api$2f$endpoints$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["API"].AUTH.REGISTER, data);
        return res.data;
    } catch (err) {
        let message = "Registration failed";
        if (err instanceof __TURBOPACK__imported__module__$5b$project$5d2f$FB$2f$node_modules$2f$axios$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["AxiosError"] && err.response) {
            message = err.response.data?.message || message;
        } else if (err instanceof Error) {
            message = err.message;
        }
        return Promise.reject(new Error(message));
    }
};
const loginUser = async (data)=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$FB$2f$lib$2f$api$2f$axios$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].post(__TURBOPACK__imported__module__$5b$project$5d2f$FB$2f$lib$2f$api$2f$endpoints$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["API"].AUTH.LOGIN, data);
        return res.data;
    } catch (err) {
        let message = "Login failed";
        if (err instanceof __TURBOPACK__imported__module__$5b$project$5d2f$FB$2f$node_modules$2f$axios$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["AxiosError"] && err.response) {
            message = err.response.data?.message || message;
        } else if (err instanceof Error) {
            message = err.message;
        }
        return Promise.reject(new Error(message));
    }
};
}),
"[project]/FB/lib/actions/auth-actions.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"403d7b892f904f1242651719817e941908616c845e":"handleRegister","4055bed6b9312423bf55e5c88e003a647dcd09580a":"handleLogin"},"",""] */ __turbopack_context__.s([
    "handleLogin",
    ()=>handleLogin,
    "handleRegister",
    ()=>handleRegister
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$FB$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/FB/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$FB$2f$lib$2f$api$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/FB/lib/api/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$FB$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/FB/node_modules/next/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$FB$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/FB/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
const handleRegister = async (formData)=>{
    try {
        const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$FB$2f$lib$2f$api$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerUser"])(formData);
        return {
            success: true,
            message: res.message,
            data: res.data
        };
    } catch (err) {
        return {
            success: false,
            message: err instanceof Error ? err.message : "Something went wrong"
        };
    }
};
const handleLogin = async (formData)=>{
    try {
        const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$FB$2f$lib$2f$api$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["loginUser"])(formData);
        // Set cookies
        const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$FB$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
        cookieStore.set("token", res.token, {
            httpOnly: true,
            secure: ("TURBOPACK compile-time value", "development") === "production",
            path: "/",
            maxAge: 60 * 60 * 24
        });
        cookieStore.set("user", JSON.stringify(res.data), {
            httpOnly: false,
            path: "/",
            maxAge: 60 * 60 * 24
        });
        return {
            success: true,
            message: res.message,
            data: res.data
        };
    } catch (err) {
        return {
            success: false,
            message: err instanceof Error ? err.message : "Something went wrong"
        };
    }
};
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$FB$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    handleRegister,
    handleLogin
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$FB$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(handleRegister, "403d7b892f904f1242651719817e941908616c845e", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$FB$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(handleLogin, "4055bed6b9312423bf55e5c88e003a647dcd09580a", null);
}),
"[project]/FB/.next-internal/server/app/(auth)/register/page/actions.js { ACTIONS_MODULE0 => \"[project]/FB/lib/actions/auth-actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$FB$2f$lib$2f$actions$2f$auth$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/FB/lib/actions/auth-actions.ts [app-rsc] (ecmascript)");
;
}),
"[project]/FB/.next-internal/server/app/(auth)/register/page/actions.js { ACTIONS_MODULE0 => \"[project]/FB/lib/actions/auth-actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "403d7b892f904f1242651719817e941908616c845e",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$FB$2f$lib$2f$actions$2f$auth$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["handleRegister"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$FB$2f2e$next$2d$internal$2f$server$2f$app$2f28$auth$292f$register$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$FB$2f$lib$2f$actions$2f$auth$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/FB/.next-internal/server/app/(auth)/register/page/actions.js { ACTIONS_MODULE0 => "[project]/FB/lib/actions/auth-actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$FB$2f$lib$2f$actions$2f$auth$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/FB/lib/actions/auth-actions.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__6fb37866._.js.map