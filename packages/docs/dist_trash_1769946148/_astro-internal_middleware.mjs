import './chunks/shared_CC9TfKQi.mjs';
import { A as AstroError, R as ResponseSentError, o as originPathnameSymbol, F as ForbiddenRewrite, a as AstroUserError } from './chunks/astro/server_vJilpAfn.mjs';
import { u as useTranslations } from './chunks/translations_Ctymldb-.mjs';

var dist = {};

var hasRequiredDist;

function requireDist () {
	if (hasRequiredDist) return dist;
	hasRequiredDist = 1;
	Object.defineProperty(dist, "__esModule", { value: true });
	dist.parseCookie = parseCookie;
	dist.parse = parseCookie;
	dist.stringifyCookie = stringifyCookie;
	dist.stringifySetCookie = stringifySetCookie;
	dist.serialize = stringifySetCookie;
	dist.parseSetCookie = parseSetCookie;
	dist.stringifySetCookie = stringifySetCookie;
	dist.serialize = stringifySetCookie;
	/**
	 * RegExp to match cookie-name in RFC 6265 sec 4.1.1
	 * This refers out to the obsoleted definition of token in RFC 2616 sec 2.2
	 * which has been replaced by the token definition in RFC 7230 appendix B.
	 *
	 * cookie-name       = token
	 * token             = 1*tchar
	 * tchar             = "!" / "#" / "$" / "%" / "&" / "'" /
	 *                     "*" / "+" / "-" / "." / "^" / "_" /
	 *                     "`" / "|" / "~" / DIGIT / ALPHA
	 *
	 * Note: Allowing more characters - https://github.com/jshttp/cookie/issues/191
	 * Allow same range as cookie value, except `=`, which delimits end of name.
	 */
	const cookieNameRegExp = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/;
	/**
	 * RegExp to match cookie-value in RFC 6265 sec 4.1.1
	 *
	 * cookie-value      = *cookie-octet / ( DQUOTE *cookie-octet DQUOTE )
	 * cookie-octet      = %x21 / %x23-2B / %x2D-3A / %x3C-5B / %x5D-7E
	 *                     ; US-ASCII characters excluding CTLs,
	 *                     ; whitespace DQUOTE, comma, semicolon,
	 *                     ; and backslash
	 *
	 * Allowing more characters: https://github.com/jshttp/cookie/issues/191
	 * Comma, backslash, and DQUOTE are not part of the parsing algorithm.
	 */
	const cookieValueRegExp = /^[\u0021-\u003A\u003C-\u007E]*$/;
	/**
	 * RegExp to match domain-value in RFC 6265 sec 4.1.1
	 *
	 * domain-value      = <subdomain>
	 *                     ; defined in [RFC1034], Section 3.5, as
	 *                     ; enhanced by [RFC1123], Section 2.1
	 * <subdomain>       = <label> | <subdomain> "." <label>
	 * <label>           = <let-dig> [ [ <ldh-str> ] <let-dig> ]
	 *                     Labels must be 63 characters or less.
	 *                     'let-dig' not 'letter' in the first char, per RFC1123
	 * <ldh-str>         = <let-dig-hyp> | <let-dig-hyp> <ldh-str>
	 * <let-dig-hyp>     = <let-dig> | "-"
	 * <let-dig>         = <letter> | <digit>
	 * <letter>          = any one of the 52 alphabetic characters A through Z in
	 *                     upper case and a through z in lower case
	 * <digit>           = any one of the ten digits 0 through 9
	 *
	 * Keep support for leading dot: https://github.com/jshttp/cookie/issues/173
	 *
	 * > (Note that a leading %x2E ("."), if present, is ignored even though that
	 * character is not permitted, but a trailing %x2E ("."), if present, will
	 * cause the user agent to ignore the attribute.)
	 */
	const domainValueRegExp = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i;
	/**
	 * RegExp to match path-value in RFC 6265 sec 4.1.1
	 *
	 * path-value        = <any CHAR except CTLs or ";">
	 * CHAR              = %x01-7F
	 *                     ; defined in RFC 5234 appendix B.1
	 */
	const pathValueRegExp = /^[\u0020-\u003A\u003D-\u007E]*$/;
	/**
	 * RegExp to match max-age-value in RFC 6265 sec 5.6.2
	 */
	const maxAgeRegExp = /^-?\d+$/;
	const __toString = Object.prototype.toString;
	const NullObject = /* @__PURE__ */ (() => {
	    const C = function () { };
	    C.prototype = Object.create(null);
	    return C;
	})();
	/**
	 * Parse a `Cookie` header.
	 *
	 * Parse the given cookie header string into an object
	 * The object has the various cookies as keys(names) => values
	 */
	function parseCookie(str, options) {
	    const obj = new NullObject();
	    const len = str.length;
	    // RFC 6265 sec 4.1.1, RFC 2616 2.2 defines a cookie name consists of one char minimum, plus '='.
	    if (len < 2)
	        return obj;
	    const dec = options?.decode || decode;
	    let index = 0;
	    do {
	        const eqIdx = eqIndex(str, index, len);
	        if (eqIdx === -1)
	            break; // No more cookie pairs.
	        const endIdx = endIndex(str, index, len);
	        if (eqIdx > endIdx) {
	            // backtrack on prior semicolon
	            index = str.lastIndexOf(";", eqIdx - 1) + 1;
	            continue;
	        }
	        const key = valueSlice(str, index, eqIdx);
	        // only assign once
	        if (obj[key] === undefined) {
	            obj[key] = dec(valueSlice(str, eqIdx + 1, endIdx));
	        }
	        index = endIdx + 1;
	    } while (index < len);
	    return obj;
	}
	/**
	 * Stringifies an object into an HTTP `Cookie` header.
	 */
	function stringifyCookie(cookie, options) {
	    const enc = options?.encode || encodeURIComponent;
	    const cookieStrings = [];
	    for (const name of Object.keys(cookie)) {
	        const val = cookie[name];
	        if (val === undefined)
	            continue;
	        if (!cookieNameRegExp.test(name)) {
	            throw new TypeError(`cookie name is invalid: ${name}`);
	        }
	        const value = enc(val);
	        if (!cookieValueRegExp.test(value)) {
	            throw new TypeError(`cookie val is invalid: ${val}`);
	        }
	        cookieStrings.push(`${name}=${value}`);
	    }
	    return cookieStrings.join("; ");
	}
	function stringifySetCookie(_name, _val, _opts) {
	    const cookie = typeof _name === "object"
	        ? _name
	        : { ..._opts, name: _name, value: String(_val) };
	    const options = typeof _val === "object" ? _val : _opts;
	    const enc = options?.encode || encodeURIComponent;
	    if (!cookieNameRegExp.test(cookie.name)) {
	        throw new TypeError(`argument name is invalid: ${cookie.name}`);
	    }
	    const value = cookie.value ? enc(cookie.value) : "";
	    if (!cookieValueRegExp.test(value)) {
	        throw new TypeError(`argument val is invalid: ${cookie.value}`);
	    }
	    let str = cookie.name + "=" + value;
	    if (cookie.maxAge !== undefined) {
	        if (!Number.isInteger(cookie.maxAge)) {
	            throw new TypeError(`option maxAge is invalid: ${cookie.maxAge}`);
	        }
	        str += "; Max-Age=" + cookie.maxAge;
	    }
	    if (cookie.domain) {
	        if (!domainValueRegExp.test(cookie.domain)) {
	            throw new TypeError(`option domain is invalid: ${cookie.domain}`);
	        }
	        str += "; Domain=" + cookie.domain;
	    }
	    if (cookie.path) {
	        if (!pathValueRegExp.test(cookie.path)) {
	            throw new TypeError(`option path is invalid: ${cookie.path}`);
	        }
	        str += "; Path=" + cookie.path;
	    }
	    if (cookie.expires) {
	        if (!isDate(cookie.expires) || !Number.isFinite(cookie.expires.valueOf())) {
	            throw new TypeError(`option expires is invalid: ${cookie.expires}`);
	        }
	        str += "; Expires=" + cookie.expires.toUTCString();
	    }
	    if (cookie.httpOnly) {
	        str += "; HttpOnly";
	    }
	    if (cookie.secure) {
	        str += "; Secure";
	    }
	    if (cookie.partitioned) {
	        str += "; Partitioned";
	    }
	    if (cookie.priority) {
	        const priority = typeof cookie.priority === "string"
	            ? cookie.priority.toLowerCase()
	            : undefined;
	        switch (priority) {
	            case "low":
	                str += "; Priority=Low";
	                break;
	            case "medium":
	                str += "; Priority=Medium";
	                break;
	            case "high":
	                str += "; Priority=High";
	                break;
	            default:
	                throw new TypeError(`option priority is invalid: ${cookie.priority}`);
	        }
	    }
	    if (cookie.sameSite) {
	        const sameSite = typeof cookie.sameSite === "string"
	            ? cookie.sameSite.toLowerCase()
	            : cookie.sameSite;
	        switch (sameSite) {
	            case true:
	            case "strict":
	                str += "; SameSite=Strict";
	                break;
	            case "lax":
	                str += "; SameSite=Lax";
	                break;
	            case "none":
	                str += "; SameSite=None";
	                break;
	            default:
	                throw new TypeError(`option sameSite is invalid: ${cookie.sameSite}`);
	        }
	    }
	    return str;
	}
	/**
	 * Deserialize a `Set-Cookie` header into an object.
	 *
	 * deserialize('foo=bar; httpOnly')
	 *   => { name: 'foo', value: 'bar', httpOnly: true }
	 */
	function parseSetCookie(str, options) {
	    const dec = options?.decode || decode;
	    const len = str.length;
	    const endIdx = endIndex(str, 0, len);
	    const eqIdx = eqIndex(str, 0, endIdx);
	    const setCookie = eqIdx === -1
	        ? { name: "", value: dec(valueSlice(str, 0, endIdx)) }
	        : {
	            name: valueSlice(str, 0, eqIdx),
	            value: dec(valueSlice(str, eqIdx + 1, endIdx)),
	        };
	    let index = endIdx + 1;
	    while (index < len) {
	        const endIdx = endIndex(str, index, len);
	        const eqIdx = eqIndex(str, index, endIdx);
	        const attr = eqIdx === -1
	            ? valueSlice(str, index, endIdx)
	            : valueSlice(str, index, eqIdx);
	        const val = eqIdx === -1 ? undefined : valueSlice(str, eqIdx + 1, endIdx);
	        switch (attr.toLowerCase()) {
	            case "httponly":
	                setCookie.httpOnly = true;
	                break;
	            case "secure":
	                setCookie.secure = true;
	                break;
	            case "partitioned":
	                setCookie.partitioned = true;
	                break;
	            case "domain":
	                setCookie.domain = val;
	                break;
	            case "path":
	                setCookie.path = val;
	                break;
	            case "max-age":
	                if (val && maxAgeRegExp.test(val))
	                    setCookie.maxAge = Number(val);
	                break;
	            case "expires":
	                if (!val)
	                    break;
	                const date = new Date(val);
	                if (Number.isFinite(date.valueOf()))
	                    setCookie.expires = date;
	                break;
	            case "priority":
	                if (!val)
	                    break;
	                const priority = val.toLowerCase();
	                if (priority === "low" ||
	                    priority === "medium" ||
	                    priority === "high") {
	                    setCookie.priority = priority;
	                }
	                break;
	            case "samesite":
	                if (!val)
	                    break;
	                const sameSite = val.toLowerCase();
	                if (sameSite === "lax" ||
	                    sameSite === "strict" ||
	                    sameSite === "none") {
	                    setCookie.sameSite = sameSite;
	                }
	                break;
	        }
	        index = endIdx + 1;
	    }
	    return setCookie;
	}
	/**
	 * Find the `;` character between `min` and `len` in str.
	 */
	function endIndex(str, min, len) {
	    const index = str.indexOf(";", min);
	    return index === -1 ? len : index;
	}
	/**
	 * Find the `=` character between `min` and `max` in str.
	 */
	function eqIndex(str, min, max) {
	    const index = str.indexOf("=", min);
	    return index < max ? index : -1;
	}
	/**
	 * Slice out a value between startPod to max.
	 */
	function valueSlice(str, min, max) {
	    let start = min;
	    let end = max;
	    do {
	        const code = str.charCodeAt(start);
	        if (code !== 0x20 /*   */ && code !== 0x09 /* \t */)
	            break;
	    } while (++start < end);
	    while (end > start) {
	        const code = str.charCodeAt(end - 1);
	        if (code !== 0x20 /*   */ && code !== 0x09 /* \t */)
	            break;
	        end--;
	    }
	    return str.slice(start, end);
	}
	/**
	 * URL-decode string value. Optimized to skip native call when no %.
	 */
	function decode(str) {
	    if (str.indexOf("%") === -1)
	        return str;
	    try {
	        return decodeURIComponent(str);
	    }
	    catch (e) {
	        return str;
	    }
	}
	/**
	 * Determine if value is a Date.
	 */
	function isDate(val) {
	    return __toString.call(val) === "[object Date]";
	}
	
	return dist;
}

var distExports = /*@__PURE__*/ requireDist();

const DELETED_EXPIRATION = /* @__PURE__ */ new Date(0);
const DELETED_VALUE = "deleted";
const responseSentSymbol = Symbol.for("astro.responseSent");
const identity = (value) => value;
class AstroCookie {
  constructor(value) {
    this.value = value;
  }
  json() {
    if (this.value === void 0) {
      throw new Error(`Cannot convert undefined to an object.`);
    }
    return JSON.parse(this.value);
  }
  number() {
    return Number(this.value);
  }
  boolean() {
    if (this.value === "false") return false;
    if (this.value === "0") return false;
    return Boolean(this.value);
  }
}
class AstroCookies {
  #request;
  #requestValues;
  #outgoing;
  #consumed;
  constructor(request) {
    this.#request = request;
    this.#requestValues = null;
    this.#outgoing = null;
    this.#consumed = false;
  }
  /**
   * Astro.cookies.delete(key) is used to delete a cookie. Using this method will result
   * in a Set-Cookie header added to the response.
   * @param key The cookie to delete
   * @param options Options related to this deletion, such as the path of the cookie.
   */
  delete(key, options) {
    const {
      // @ts-expect-error
      maxAge: _ignoredMaxAge,
      // @ts-expect-error
      expires: _ignoredExpires,
      ...sanitizedOptions
    } = options || {};
    const serializeOptions = {
      expires: DELETED_EXPIRATION,
      ...sanitizedOptions
    };
    this.#ensureOutgoingMap().set(key, [
      DELETED_VALUE,
      distExports.serialize(key, DELETED_VALUE, serializeOptions),
      false
    ]);
  }
  /**
   * Astro.cookies.get(key) is used to get a cookie value. The cookie value is read from the
   * request. If you have set a cookie via Astro.cookies.set(key, value), the value will be taken
   * from that set call, overriding any values already part of the request.
   * @param key The cookie to get.
   * @returns An object containing the cookie value as well as convenience methods for converting its value.
   */
  get(key, options = void 0) {
    if (this.#outgoing?.has(key)) {
      let [serializedValue, , isSetValue] = this.#outgoing.get(key);
      if (isSetValue) {
        return new AstroCookie(serializedValue);
      } else {
        return void 0;
      }
    }
    const decode = options?.decode ?? decodeURIComponent;
    const values = this.#ensureParsed();
    if (key in values) {
      const value = values[key];
      if (value) {
        return new AstroCookie(decode(value));
      }
    }
  }
  /**
   * Astro.cookies.has(key) returns a boolean indicating whether this cookie is either
   * part of the initial request or set via Astro.cookies.set(key)
   * @param key The cookie to check for.
   * @param _options This parameter is no longer used.
   * @returns
   */
  has(key, _options) {
    if (this.#outgoing?.has(key)) {
      let [, , isSetValue] = this.#outgoing.get(key);
      return isSetValue;
    }
    const values = this.#ensureParsed();
    return values[key] !== void 0;
  }
  /**
   * Astro.cookies.set(key, value) is used to set a cookie's value. If provided
   * an object it will be stringified via JSON.stringify(value). Additionally you
   * can provide options customizing how this cookie will be set, such as setting httpOnly
   * in order to prevent the cookie from being read in client-side JavaScript.
   * @param key The name of the cookie to set.
   * @param value A value, either a string or other primitive or an object.
   * @param options Options for the cookie, such as the path and security settings.
   */
  set(key, value, options) {
    if (this.#consumed) {
      const warning = new Error(
        "Astro.cookies.set() was called after the cookies had already been sent to the browser.\nThis may have happened if this method was called in an imported component.\nPlease make sure that Astro.cookies.set() is only called in the frontmatter of the main page."
      );
      warning.name = "Warning";
      console.warn(warning);
    }
    let serializedValue;
    if (typeof value === "string") {
      serializedValue = value;
    } else {
      let toStringValue = value.toString();
      if (toStringValue === Object.prototype.toString.call(value)) {
        serializedValue = JSON.stringify(value);
      } else {
        serializedValue = toStringValue;
      }
    }
    const serializeOptions = {};
    if (options) {
      Object.assign(serializeOptions, options);
    }
    this.#ensureOutgoingMap().set(key, [
      serializedValue,
      distExports.serialize(key, serializedValue, serializeOptions),
      true
    ]);
    if (this.#request[responseSentSymbol]) {
      throw new AstroError({
        ...ResponseSentError
      });
    }
  }
  /**
   * Merges a new AstroCookies instance into the current instance. Any new cookies
   * will be added to the current instance, overwriting any existing cookies with the same name.
   */
  merge(cookies) {
    const outgoing = cookies.#outgoing;
    if (outgoing) {
      for (const [key, value] of outgoing) {
        this.#ensureOutgoingMap().set(key, value);
      }
    }
  }
  /**
   * Astro.cookies.header() returns an iterator for the cookies that have previously
   * been set by either Astro.cookies.set() or Astro.cookies.delete().
   * This method is primarily used by adapters to set the header on outgoing responses.
   * @returns
   */
  *headers() {
    if (this.#outgoing == null) return;
    for (const [, value] of this.#outgoing) {
      yield value[1];
    }
  }
  /**
   * Behaves the same as AstroCookies.prototype.headers(),
   * but allows a warning when cookies are set after the instance is consumed.
   */
  static consume(cookies) {
    cookies.#consumed = true;
    return cookies.headers();
  }
  #ensureParsed() {
    if (!this.#requestValues) {
      this.#parse();
    }
    if (!this.#requestValues) {
      this.#requestValues = {};
    }
    return this.#requestValues;
  }
  #ensureOutgoingMap() {
    if (!this.#outgoing) {
      this.#outgoing = /* @__PURE__ */ new Map();
    }
    return this.#outgoing;
  }
  #parse() {
    const raw = this.#request.headers.get("cookie");
    if (!raw) {
      return;
    }
    this.#requestValues = distExports.parse(raw, { decode: identity });
  }
}

function setOriginPathname(request, pathname) {
  Reflect.set(request, originPathnameSymbol, encodeURIComponent(pathname));
}

function getParams(route, pathname) {
  if (!route.params.length) return {};
  const paramsMatch = route.pattern.exec(pathname) || route.fallbackRoutes.map((fallbackRoute) => fallbackRoute.pattern.exec(pathname)).find((x) => x);
  if (!paramsMatch) return {};
  const params = {};
  route.params.forEach((key, i) => {
    if (key.startsWith("...")) {
      params[key.slice(3)] = paramsMatch[i + 1] ? paramsMatch[i + 1] : void 0;
    } else {
      params[key] = paramsMatch[i + 1];
    }
  });
  return params;
}

const apiContextRoutesSymbol = Symbol.for("context.routes");

function sequence(...handlers) {
  const filtered = handlers.filter((h) => !!h);
  const length = filtered.length;
  if (!length) {
    return defineMiddleware((_context, next) => {
      return next();
    });
  }
  return defineMiddleware((context, next) => {
    let carriedPayload = void 0;
    return applyHandle(0, context);
    function applyHandle(i, handleContext) {
      const handle = filtered[i];
      const result = handle(handleContext, async (payload) => {
        if (i < length - 1) {
          if (payload) {
            let newRequest;
            if (payload instanceof Request) {
              newRequest = payload;
            } else if (payload instanceof URL) {
              newRequest = new Request(payload, handleContext.request);
            } else {
              newRequest = new Request(
                new URL(payload, handleContext.url.origin),
                handleContext.request
              );
            }
            const oldPathname = handleContext.url.pathname;
            const pipeline = Reflect.get(handleContext, apiContextRoutesSymbol);
            const { routeData, pathname } = await pipeline.tryRewrite(
              payload,
              handleContext.request
            );
            if (pipeline.serverLike === true && handleContext.isPrerendered === false && routeData.prerender === true) {
              throw new AstroError({
                ...ForbiddenRewrite,
                message: ForbiddenRewrite.message(
                  handleContext.url.pathname,
                  pathname,
                  routeData.component
                ),
                hint: ForbiddenRewrite.hint(routeData.component)
              });
            }
            carriedPayload = payload;
            handleContext.request = newRequest;
            handleContext.url = new URL(newRequest.url);
            handleContext.cookies = new AstroCookies(newRequest);
            handleContext.params = getParams(routeData, pathname);
            setOriginPathname(handleContext.request, oldPathname);
          }
          return applyHandle(i + 1, handleContext);
        } else {
          return next(payload ?? carriedPayload);
        }
      });
      return result;
    }
  });
}

function defineMiddleware(fn) {
  return fn;
}

const onRequest$1 = defineMiddleware(async (context, next) => {
  context.locals.t = useTranslations(context.currentLocale);
  initializeStarlightRoute(context);
  return next();
});
function initializeStarlightRoute(context) {
  if ("starlightRoute" in context.locals) return;
  const state = { routeData: void 0 };
  Object.defineProperty(context.locals, "starlightRoute", {
    get() {
      if (!state.routeData) {
        throw new AstroUserError(
          "`locals.starlightRoute` is not defined",
          "This usually means a component that accesses `locals.starlightRoute` is being rendered outside of a Starlight page, which is not supported.\n\nIf this is a component you authored, you can do one of the following:\n\n1. Avoid using this component in non-Starlight pages.\n2. Wrap the code that reads `locals.starlightRoute` in a  `try/catch` block and handle the cases where `starlightRoute` is not available.\n\nIf this is a Starlight built-in or third-party component, you may need to report a bug or avoid this use of the component."
        );
      }
      return state.routeData;
    },
    set(routeData) {
      state.routeData = routeData;
    }
  });
}

const onRequest = sequence(
	onRequest$1,
	
	
);

export { onRequest };
