describe('account', () => {
  it('fetches an account', async () => {
    const me = await admin.v1.accounts.verifyCredentials.fetch();
    const account = await admin.v1.admin.accounts.select(me.id).fetch();
    expect(account.id).toBe(me.id);
  });

  it('lists accounts', async () => {
    const accounts = await admin.v1.admin.accounts.list();
    expect(accounts.length).toBeGreaterThan(0);
  });

  test.todo('approves an account');

  test.todo('rejects an account');

  it('disables an account', async () => {
    return clients.use(async (client) => {
      const user = await client.v1.accounts.verifyCredentials.fetch();

      await admin.v1.admin.accounts.select(user.id).action.create({
        type: 'disable',
      });
      let account = await admin.v1.admin.accounts.select(user.id).fetch();
      expect(account.disabled).toBe(true);

      account = await admin.v1.admin.accounts.select(user.id).enable();
      expect(account.disabled).toBe(false);
    });
  });

  it('suspends an account', async () => {
    return clients.use(async (client) => {
      const user = await client.v1.accounts.verifyCredentials.fetch();

      await admin.v1.admin.accounts.select(user.id).action.create({
        type: 'suspend',
      });
      let account = await admin.v1.admin.accounts.select(user.id).fetch();
      expect(account.suspended).toBe(true);

      account = await admin.v1.admin.accounts.select(user.id).unsuspend();
      expect(account.suspended).toBe(false);
    });
  });

  it('silences an account', async () => {
    return clients.use(async (client) => {
      const user = await client.v1.accounts.verifyCredentials.fetch();

      await admin.v1.admin.accounts.select(user.id).action.create({
        type: 'silence',
      });
      let account = await admin.v1.admin.accounts.select(user.id).fetch();
      expect(account.silenced).toBe(true);

      account = await admin.v1.admin.accounts.select(user.id).unsilence();
      expect(account.silenced).toBe(false);
    });
  });

  it('marks account as sensitive', async () => {
    return clients.use(async (client) => {
      const user = await client.v1.accounts.verifyCredentials.fetch();

      await admin.v1.admin.accounts.select(user.id).action.create({
        type: 'sensitive',
      });
      let account = await admin.v1.admin.accounts.select(user.id).fetch();
      expect(account.sensitized).toBe(true);

      account = await admin.v1.admin.accounts.select(user.id).unsensitive();
      expect(account.sensitized).toBe(false);
    });
  });
});
