enum METHODS {
  get = "GET",
  post = "POST",
}
class NetworkUtil {
  private static async makeRequest(
    url: URL,
    method: METHODS,
    requestData: any = {}
  ): Promise<Object | Error> {
    try {
      const options: RequestInit = {
        method: method,
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "x-rapidapi-key": process.env.X_RapidAPI_Key || "",
          "x-rapidapi-host": process.env.X_RAPIDAPI_HOST || "",
        },
      };
      if (method === METHODS.post) {
        options["body"] = JSON.stringify(requestData);
      }
      const response: Response = await fetch(url.toString(), options);
      const data = await response.json();
      return data;
    } catch (e) {
      return {
        message: e?.message || e.toString(),
        name: e?.name || "Error",
        type: "error",
      };
    }
  }
  static async get(url: string, data: any = {}): Promise<Object | Error> {
    console.log(url);
    const uri = new URL(url);
    const searchParams = data;
    uri.search = new URLSearchParams(searchParams).toString();
    return await NetworkUtil.makeRequest(uri, METHODS.get);
  }
  static async post(url: string, data: any = {}): Promise<Object | Error> {
    const uri = new URL(url);
    return await NetworkUtil.makeRequest(uri, METHODS.post, data);
  }
}

export default NetworkUtil;
