const { Builder, Browser, By, until } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
  });
  test("see all bots button get all bots", async () => {
    await driver.get("http://localhost:8000");
    await driver.findElement(By.css('button')).click();
  });
  test("see that the Draw button displays the div with id = choices", async () => {
    await driver.get("http://localhost:8000");
    await driver.findElement(By.css('button')).click();
  });
});