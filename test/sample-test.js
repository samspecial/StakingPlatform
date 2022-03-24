const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Stalker", function () {
  it("Should return the new greeting once it's changed", async function () {
    const Staker = await ethers.getContractFactory("Greeter");
    const staker = await Staker.deploy("Hello, world!");
    await staker.deployed();

    expect(await staker.greet()).to.equal("Hello, world!");
  });
});
