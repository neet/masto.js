import { getMockImage } from "../../../test-utils/image.js";

describe("profile", () => {
  it("can fetch the current user's profile", async () => {
    await using client = await sessions.acquire();
    const profile = await client.rest.v1.profile.fetch();

    expect(profile.id).toEqual(expect.any(String));
    expect(profile.displayName).toEqual(expect.any(String));
    expect(profile.note).toEqual(expect.any(String));
    expect(profile.fields).toEqual(expect.any(Array));
    expect(profile.locked).toEqual(expect.any(Boolean));
    expect(profile.bot).toEqual(expect.any(Boolean));
    expect(profile.indexable).toEqual(expect.any(Boolean));
    expect(profile.avatarDescription).toEqual(expect.any(String));
    expect(profile.headerDescription).toEqual(expect.any(String));
    expect(profile.attributionDomains).toEqual(expect.any(Array));
    expect(profile.featuredTags).toEqual(expect.any(Array));
  });

  it("can update the current user's profile", async () => {
    await using client = await sessions.acquire();
    const random = Math.random().toString();

    const profile = await client.rest.v1.profile.update({
      displayName: random,
    });

    expect(profile.displayName).toBe(random);
  });

  it("can update profile fields", async () => {
    await using client = await sessions.acquire();
    const random = Math.random().toString();

    const profile = await client.rest.v1.profile.update({
      fieldsAttributes: [
        {
          name: "test",
          value: random,
        },
      ],
    });

    expect(profile.fields).toEqual([
      {
        name: "test",
        value: random,
        // eslint-disable-next-line unicorn/no-null
        verifiedAt: null,
      },
    ]);
  });

  it("can remove avatar", async () => {
    await using client = await sessions.acquire();
    const profile1 = await client.rest.v1.accounts.updateCredentials({
      avatar: await getMockImage(),
    });
    await client.rest.v1.profile.avatar.remove();
    const profile2 = await client.rest.v1.accounts.verifyCredentials();
    expect(profile1.avatar).not.toBe(profile2.avatar);
  });

  it("can remove header", async () => {
    await using client = await sessions.acquire();
    const profile1 = await client.rest.v1.accounts.updateCredentials({
      header: await getMockImage(),
    });
    await client.rest.v1.profile.header.remove();
    const profile2 = await client.rest.v1.accounts.verifyCredentials();
    expect(profile1.header).not.toBe(profile2.header);
  });
});
