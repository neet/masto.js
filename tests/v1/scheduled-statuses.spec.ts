describe('scheduled-statuses', () => {
  it('schedules a status', () => {
    return clients.use(async (client) => {
      const tomorrow = new Date(Date.now() + 1000 * 60 * 60 * 24);
      const scheduledAt = tomorrow.toISOString();

      let schedule = await client.v1.statuses.create({
        status: 'Scheduled status',
        scheduledAt,
      });
      expect(schedule.params.text).toBe('Scheduled status');
      expect(schedule.scheduledAt).toBe(scheduledAt);

      schedule = await client.v1.scheduledStatuses.fetch(schedule.id);
      expect(schedule.params.text).toBe('Scheduled status');
      expect(schedule.scheduledAt).toBe(scheduledAt);

      const dayAfterTomorrow = new Date(Date.now() + 1000 * 60 * 60 * 24 * 2);
      schedule = await client.v1.scheduledStatuses.update(schedule.id, {
        scheduledAt: dayAfterTomorrow.toISOString(),
      });
      expect(schedule.params.text).toBe('Scheduled status');
      expect(schedule.scheduledAt).toBe(dayAfterTomorrow.toISOString());

      const scheduledStatuses = await client.v1.scheduledStatuses.list();
      expect(scheduledStatuses[0].id).toBe(schedule.id);

      await client.v1.scheduledStatuses.remove(schedule.id);
    });
  });
});
