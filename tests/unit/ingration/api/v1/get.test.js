const statusHandler = require("../../../../../pages/api/v1/index.js");

function createMockResponse() {
  const res = {
    statusCode: 200,
    body: null,
    status(code) {
      this.statusCode = code;
      return this;
    },
    json(payload) {
      this.body = payload;
      return this;
    },
  };
  return res;
}

test("GET to /api/v1 should return 200", async () => {
  const request = { method: "GET", url: "/api/v1" };
  const response = createMockResponse();

  await statusHandler(request, response);

  expect(response.statusCode).toBe(200);
  expect(response.body).toEqual({ status: "ok" });
});
