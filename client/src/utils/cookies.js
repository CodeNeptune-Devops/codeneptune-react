export const cookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'strict',
  path: '/',
};

export const setRefreshTokenCookie = (response, token) => {
  const maxAge = 7 * 24 * 60 * 60; // 7 days in seconds
  
  response.cookies.set('cnrefreshtoken', token, {
    ...cookieOptions,
    maxAge,
  });
};

export const clearAuthCookies = (response) => {
  response.cookies.set('cnrefreshtoken', '', {
    ...cookieOptions,
    maxAge: 0,
  });
};