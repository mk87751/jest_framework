const user = require("./user");
const axios = require("axios");


jest.mock("axios");
describe("retrieving user details", () => {
  afterEach(()=>{
    jest.clearAllMocks();
  })
  test("should fetch", () => {
    const users = [
      {
        id: 2,
        email: "janet.weaver@reqres.in",
        first_name: "Janet",
        last_name: "Weaver",
        avatar: "https://reqres.in/img/faces/2-image.jpg",
      },
    ];
    const requestUrl="/api/users/2";
    axios.get.mockResolvedValueOnce(users);
     user.getUserDetails(requestUrl).then(data=>expect(data).toEqual(users))
     expect(axios.get).toHaveBeenCalledWith(`https://reqres.in${requestUrl}`)
     expect(axios.get).toHaveBeenCalledTimes(1)
  });
  test.only("shouldn't fetch", () => {
    const users = [
      {
        id: 2,
        email: "janet.weaver@reqres.in",
        first_name: "Janet",
        last_name: "Weaver",
        avatar: "https://reqres.in/img/faces/2-image.jpg",
      },
    ];
    const message="data not found"
    const requestUrl="/api/users/2";
    axios.get.mockRejectedValueOnce(new Error(message));


   user.getUserDetails(requestUrl).then(data=>expect(data).toEqual(message))
    expect(axios.get).toHaveBeenCalledWith(`https://reqres.in${requestUrl}`)
    expect(axios.get).toHaveBeenCalledTimes(1)
  });
});
