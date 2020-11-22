import jwt from 'jsonwebtoken';
import Router from 'next/router';

const SECRET_KEY = process.env.JWT_KEY;

/*
 * @params {jwtToken} extracted from cookies
 * @return {object} object of extracted token
 */
export function verifyToken(jwtToken) {
  try {
    return jwt.verify(jwtToken, 'secretOrKeyJWTRandom');
  } catch (e) {
    console.log('e:', e);
    return null;
  }
}

/*
 * @params {request} extracted from request response
 * @return {object} object of parse jwt cookie decode object
 */
export function getAppCookies(req) {
  const parsedItems = {};
  if (req.headers.cookie) {
    const cookiesItems = req.headers.cookie.split('; ');
    cookiesItems.forEach(cookies => {
      const parsedItem = cookies.split('=');
      parsedItems[parsedItem[0]] = decodeURI(parsedItem[1]);
    });
  }
  return parsedItems;
}

/*
 * @params {request} extracted from request response, {setLocalhost} your localhost address
 * @return {object} objects of protocol, host and origin
 */
export function absoluteUrl(req, setLocalhost) {
  var protocol = 'https:';
  var host = req
    ? req.headers['x-forwarded-host'] || req.headers['host']
    : window.location.host;
  if (host.indexOf('localhost') > -1) {
    if (setLocalhost) host = setLocalhost;
    protocol = 'http:';
  }
  return {
    protocol: protocol,
    host: host,
    origin: protocol + '//' + host,
    url: req,
  };
}

export const authMiddlewareRole = ctx => {
  const { token } = getAppCookies(ctx.req);

  if (ctx.req && !token) {
    ctx.res.writeHead(302, { Location: "/user/login" });
    ctx.res.end();
    return;
  }
  
  if (!token) {
    Router.push("/user/login");
  }
};

export const loggedAuth = ctx => {
  const { token } = getAppCookies(ctx.req);

  if (token) {
    ctx.res.writeHead(302, { Location: "/" });
    ctx.res.end();
    return;
  }
};

