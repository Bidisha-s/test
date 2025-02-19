Access to XMLHttpRequest at 'https://in-analytics.mpay.samsung.com/api/session' from origin 'http://localhost:3000' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: The value of the 'Access-Control-Allow-Origin' header in the response must not be the wildcard '*' when the request's credentials mode is 'include'. The credentials mode of requests initiated by the XMLHttpRequest is controlled by the withCredentials attribute.
main.2ee853d1699830737e92.hot-update.js:62  Sign-in failed: AxiosError {message: 'Network Error', name: 'AxiosError', code: 'ERR_NETWORK', config: {…}, request: XMLHttpRequest, …}code: "ERR_NETWORK"config: adapter: (3) ['xhr', 'http', 'fetch']data: "{\"username\":\"j.tejaswi@samsung.com\",\"password\":\"tejaswi@99\"}"env: {FormData: ƒ, Blob: ƒ}headers: AxiosHeaders {Accept: 'application/json, text/plain, */*', Content-Type: 'application/json'}maxBodyLength: -1maxContentLength: -1method: "post"timeout: 0transformRequest: [ƒ]transformResponse: [ƒ]transitional: {silentJSONParsing: true, forcedJSONParsing: true, clarifyTimeoutError: false}url: "https://in-analytics.mpay.samsung.com/api/session"validateStatus: ƒ validateStatus(status)withCredentials: truexsrfCookieName: "XSRF-TOKEN"xsrfHeaderName: "X-XSRF-TOKEN"[[Prototype]]: Objectmessage: "Network Error"name: "AxiosError"request: XMLHttpRequest {onreadystatechange: null, readyState: 4, timeout: 0, withCredentials: true, upload: XMLHttpRequestUpload, …}stack: "AxiosError: Network Error\n    at XMLHttpRequest.handleError (http://localhost:3000/main.e712cbea3153e540079a.hot-update.js:554:14)\n    at Axios.request (http://localhost:3000/main.e712cbea3153e540079a.hot-update.js:999:41)\n    at async handleSignin (http://localhost:3000/main.2ee853d1699830737e92.hot-update.js:38:24)"[[Prototype]]: Error
handleSignin @ main.2ee853d1699830737e92.hot-update.js:62
await in handleSignin
processDispatchQueue @ react-dom-client.development.js:15945
(anonymous) @ react-dom-client.development.js:16440
batchedUpdates$1 @ react-dom-client.development.js:2939
dispatchEventForPluginEventSystem @ react-dom-client.development.js:16092
dispatchEvent @ react-dom-client.development.js:20164
dispatchDiscreteEvent @ react-dom-client.development.js:20137
main.2ee853d1699830737e92.hot-update.js:38 
            
            
            POST https://in-analytics.mpay.samsung.com/api/session net::ERR_FAILED