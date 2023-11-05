import {qrController,deleteCookie} from "https://cdn.jsdelivr.net/gh/whatsauth/js@0.0.9/whatsauth.js";
import { wauthparam } from "https://cdn.jsdelivr.net/gh/whatsauth/js@0.0.9/config.js";

wauthparam.auth_ws="d3NzOi8vYXBpLndhLm15LmlkL3dzL3doYXRzYXV0aC9wdWJsaWM=";
wauthparam.keyword="aHR0cHM6Ly93YS5tZS82MjgzMTMxODk1MDAwP3RleHQ9d2g0dDVhdXRoMA==";
deleteCookie(wauthparam.tokencookiename);
qrController(wauthparam);