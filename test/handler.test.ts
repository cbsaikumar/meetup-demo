import { hello } from "../handler";

describe("test handler functions", () => {
  it("should test with success response", async () => {
    const event = {
      httpMethod: "get",
    };
    const response = await hello(event);

    expect(response.statusCode).toBe(200);
  });
});
